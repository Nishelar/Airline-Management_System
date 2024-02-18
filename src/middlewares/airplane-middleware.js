const { ErrorResponse } = require("../utilities/Common");
const {StatusCodes}=require('http-status-codes');
const AppError = require("../utilities/Errors/app-Error");
async function validateCreateRequest(req,res,next){
    if(!req.body.modelNumber){
        ErrorResponse.message="Something went wrong while create an airplane",
        ErrorResponse.error=new AppError(['Model Number not found on the create request please specify the modelNo'],StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    next();
}
async function validateUpdateRequest(req,res,next){
    if(!req.body.capacity){
        ErrorResponse.message="Something went wrong while updating an airplane",
        ErrorResponse.error=new AppError(['Capacity not found on the update request'],StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    next();
}
module.exports={
    validateCreateRequest,
    validateUpdateRequest
}