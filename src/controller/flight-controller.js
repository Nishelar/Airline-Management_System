const {FlightService}=require("../services");
const { SuccessResponse, ErrorResponse } = require("../utilities/Common");
const {StatusCodes}=require("http-status-codes")
async function createFlight(req,res){
    try{
        const flight=await FlightService.createFlight({
            flightNumber:req.body.flightNumber,
            airplaneId:req.body.airplaneId,
            departureAirportId:req.body.departureAirportId,
            arrivalAirportId:req.body.arrivalAirportId,
            departureTime:req.body.departureTime,
            arrivalTime:req.body.arrivalTime,
            price:req.body.price,
            boardingGate:req.body.boardingGate,
            totalSeats:req.body.totalSeats
    });
    SuccessResponse.data=flight;
    return res
    .status(StatusCodes.CREATED)
    .json(SuccessResponse);
    }
    catch(error){
        ErrorResponse.error=error;
        return res
        .status(error.statusCode)
        .json(ErrorResponse);
    }
}
async function getFlights(req,res){
    try{  
    const flight=await FlightService.getFlights(req.query);
    SuccessResponse.data=flight;
    return res
    .status(StatusCodes.OK)
    .json(SuccessResponse);
    }
    catch(error){
        ErrorResponse.error=error;
        return res
        .status(
            ErrorResponse.error.statusCode
        )
        .json(ErrorResponse);
    }
}

async function getFlight(req,res){
    try {
       const flight=await FlightService.getFlight(req.params.id);
       SuccessResponse.data=flight;
       return res
       .status(StatusCodes.OK)
       .json(SuccessResponse); 
    } catch (error) {
        ErrorResponse.error=error;
        return res
        .status(
            ErrorResponse.error.statusCode
        )
        .json(ErrorResponse);
    }
}

async function updateSeats(req,res){
    try {
        const flight=await FlightService.updateSeats({
            flightId:req.params.id,
            seats:req.body.seats,
            dec:req.body.dec
        })
        SuccessResponse.data=flight;
        return res
       .status(StatusCodes.OK)
       .json(SuccessResponse); 
    } catch (error) {
        ErrorResponse.error=error;
        return res
        .status(
            ErrorResponse.error.statusCode
        )
        .json(ErrorResponse);
        
    }
}

module.exports={
    createFlight,
    getFlights,
    getFlight,
    updateSeats
}