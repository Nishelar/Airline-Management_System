const { AirportRepository } = require("../repositories");
const AppError=require("../utilities/Errors/app-Error")
const airportRepository=new AirportRepository();
const {StatusCodes}=require('http-status-codes')

async function createAirport(data){
    try{
     const airport=await airportRepository.create(data)
     return airport;
    }
    catch(error){
        if(error.name=="SequelizeValidationError"){
            let explanation=[];
            error.errors.forEach((err)=>{
                explanation.push(err.message);
            });
            throw new AppError(explanation,StatusCodes.BAD_REQUEST);
        }
        throw new AppError('Cannot create a new Airport',StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

async function getAirport(id){
    try {
        const airport=await airportRepository.get(id);
        return airport;
    } catch (error) {
        if(error.statusCode==StatusCodes.NOT_FOUND){
            throw new AppError('Airport you are looking for doesnot exist',error.statusCode);
        }
        throw new AppError('Cannot fetch the airport details you are looking for',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAirports(){
    try {
        const airports=await airportRepository.getAll();
        return airports;
    } catch (error) {
        throw new AppError('Cannot find the airport details',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function updateAirport(id,data){
    try {
        const airport=await airportRepository.update(id,data);
        return airport;
    } catch (error) {
        if(error.statusCode==StatusCodes.NOT_FOUND){
            throw new AppError('Airport you are looking to update doesnot exist',error.statusCode);
        }
        throw new AppError('Cannot update the airport details',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function destroyAirport(id){
    try {
        const airport=await airportRepository.destroy(id);
        return airport;
    } catch (error) {
        if(error.statusCode==StatusCodes.NOT_FOUND){
            throw new AppError('Airport you are looking for delete doesnot exist',error.statusCode);
        }
        throw new AppError('Cannot delete the airport details',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports={
    createAirport,
    updateAirport,
    destroyAirport,
    getAirport,
    getAirports
}