const {AirportService}=require("../services");
const { SuccessResponse, ErrorResponse } = require("../utilities/Common");
const {StatusCodes}=require("http-status-codes")
async function createAirport(req,res){
    try{
        const airport=await AirportService.createAirport({
        name:req.body.name,
        code:req.body.code,
        address:req.body.address,
        cityId:req.body.cityId
    });
    SuccessResponse.data=airport;
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

async function getAirport(req,res){
    try{  
    const airport=await AirportService.getAirport(req.params.id);
    SuccessResponse.data=airport;
    return res
    .status(StatusCodes.CREATED)
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

async function getAirports(req,res){
    try{
    const airport=await AirportService.getAirports();
    console.log(airport);
    SuccessResponse.data=airport;
    return res
    .status(StatusCodes.OK)
    .json(SuccessResponse);
    }
    catch(error){
        ErrorResponse.error=error;
        return res
        .status(ErrorResponse.error.statusCode)
        .json(ErrorResponse);
    }
}


async function destroyAirport(req,res){
    try{
    const airport=await AirportService.destroyAirport(req.params.id);
    SuccessResponse.data=airport;
    return res
    .status(StatusCodes.OK)
    .json(SuccessResponse);
    }
    catch(error){
        ErrorResponse.error=error;
        return res
        .status(ErrorResponse.error.statusCode)
        .json(ErrorResponse);
    }
}

async function updateAirport(req,res){
    try{
        const airport=await AirportService.updateAirport(req.params.id,{
        name:req.body.name,
        address:req.body.address,    
        code:req.body.code
    })
    SuccessResponse.data=airport;
    return res.status(StatusCodes.OK).json(SuccessResponse);
    }
    catch(error){
        ErrorResponse.error=error;
        return res
        .status(error.statusCode)
        .json(ErrorResponse);
    }
}

module.exports={
    createAirport,
    getAirport,
    getAirports,
    destroyAirport,
    updateAirport,
}