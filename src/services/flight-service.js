const { Op } = require("sequelize");
const { FlightRepository } = require("../repositories");
const AppError=require("../utilities/Errors/app-Error")
const flightRepository=new FlightRepository();
const {StatusCodes}=require('http-status-codes')

async function createFlight(data){
    try{
     const flight=await flightRepository.create(data)
     return flight;
    }
    catch(error){
        if(error.name=="SequelizeValidationError"){
            let explanation=[];
            error.errors.forEach((err)=>{
                explanation.push(err.message);
            });
            throw new AppError(explanation,StatusCodes.BAD_REQUEST);
        }
        throw new AppError('Cannot create a new Flight',StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

async function getFlights(query){

    const customFilter={};
    let sortFilter=[];
    const endtime="23:59:59";

    if(query.trips){
        [departureAirportId,arrivalAirportId]=query.trips.split("-");
        customFilter.departureAirportId=departureAirportId;
        customFilter.arrivalAirportId=arrivalAirportId;
    }
    if(query.price){
        [lowestPrice,highestPrice]=query.price.split("-");
        customFilter.price={
            [Op.between]:[lowestPrice,(highestPrice==undefined)?Number.MAX_SAFE_INTEGER:highestPrice]
        }
    }
    if(query.travellers){
       customFilter.totalSeats={
          [Op.gte]:query.travellers
       }
    }
    if(query.tripdate){
        customFilter.tripdate={
            [Op.between]:[query.tripdate,query.tripdate+endtime]
        }
    }
    if(query.sort){
        const params=query.sort.split(",");
        const sortFilters=params.map((param)=>param.split('-'));
        sortFilter=sortFilters;
    }
    try{
    const response=await flightRepository.getFlights(customFilter,sortFilter);
    return response;
    }catch(error){
        console.log(error);
        throw new AppError(
            "Cannot find the flight details",
            StatusCodes.INTERNAL_SERVER_ERROR
        );
    }
}

async function getFlight(id){
    try {
     const flight=await flightRepository.get(id);
     return flight;   
    } catch (error) {
        throw new AppError("Cannot find the flight you are looking for",error.statusCode);    
    }
}

async function updateSeats(data){
    try {
       console.log(data); 
       const flight=await flightRepository.updateSeats(data);
       return flight; 
    } catch (error) {
        console.log(error)
        throw new AppError("Cannot update  the seats for the flight you are looking for",error.statusCode);
    }
}


module.exports={
    createFlight,
    getFlights,
    getFlight,
    updateSeats
}