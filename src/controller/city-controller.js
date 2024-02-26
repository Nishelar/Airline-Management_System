const {CityService}=require("../services");
const { SuccessResponse, ErrorResponse } = require("../utilities/Common");
const {StatusCodes}=require("http-status-codes")
async function createCity(req,res){
    try{
        const City=await CityService.createCity({
        name:req.body.name
    });
    SuccessResponse.data=City;
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

async function getCity(req,res){
    try{  
    const City=await CityService.getCity(req.params.id);
    SuccessResponse.data=City;
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

async function getCities(req,res){
    try{
    const City=await CityService.getCities();
    console.log(City);
    SuccessResponse.data=City;
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


async function destroyCity(req,res){
    try{
    const City=await CityService.destroyCity(req.params.id);
    SuccessResponse.data=City;
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

async function updateCity(req,res){
    try{
        const City=await CityService.updateCity(req.params.id,{
        name:req.body.name
    })
    SuccessResponse.data=City;
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
    createCity,
    getCity,
    getCities,
    destroyCity,
    updateCity,
}