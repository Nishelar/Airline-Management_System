const { ErrorResponse } = require("../utilities/Common");
const {StatusCodes}=require('http-status-codes');
const AppError = require("../utilities/Errors/app-Error");
async function validateCreateRequest(req,res,next){
    if(!req.body.name){
        ErrorResponse.message="Something went wrong while create City",
        ErrorResponse.error=new AppError(['name not found on the create request please specify the city'],StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    next();
}
module.exports={
    validateCreateRequest,
}