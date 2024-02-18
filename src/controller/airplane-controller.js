const {AirplaneService}=require("../services");
const { SuccessResponse, ErrorResponse } = require("../utilities/Common");
const {StatusCodes}=require("http-status-codes")
async function createAirplane(req,res){
    try{
        const airplane=await AirplaneService.createAirplane({
        modelNumber:req.body.modelNumber,
        capacity:req.body.capacity,
    });
    SuccessResponse.data=airplane;
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

async function getAirplane(req,res){
    try{  
    const airplane=await AirplaneService.getAirplane(req.params.id);
    SuccessResponse.data=airplane;
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

async function getAirplanes(req,res){
    try{
    const airplane=await AirplaneService.getAirplanes();
    console.log(airplane);
    SuccessResponse.data=airplane;
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


async function destroyAirplane(req,res){
    try{
    const airplane=await AirplaneService.destroyAirplane(req.params.id);
    SuccessResponse.data=airplane;
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

async function updateAirplane(req,res){
    try{
        const airplane=await AirplaneService.updateAirplane(req.params.id,{
        capacity:req.body.capacity
    })
    SuccessResponse.data=airplane;
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
    createAirplane,
    getAirplane,
    getAirplanes,
    destroyAirplane,
    updateAirplane,
}