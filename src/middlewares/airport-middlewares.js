const { ErrorResponse } = require("../utilities/Common");
const { StatusCodes } = require("http-status-codes");
const AppError = require("../utilities/Errors/app-Error");
async function validateCreateRequest(req, res, next) {
  if (!req.body.name) {
    ErrorResponse.message = "Something went wrong while creating an airport",
    ErrorResponse.error = new AppError(
        ["Name not found on the create request please specify the name"],
        StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  if (!req.body.code) {
    ErrorResponse.message = "Something went wrong while creating an airport",
    ErrorResponse.error = new AppError(
        ["Code not found on the create request please specify the code"],
        StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  if (!req.body.address) {
    ErrorResponse.message = "Something went wrong while creating an airport",
    ErrorResponse.error = new AppError(
        ["Address not found on the create request please specify the address"],
        StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }

  if(!req.body.cityId){
    ErrorResponse.message="Something went wrong while creating an airport",
    ErrorResponse.error=new AppError(['CityId not found on the create request please specify the cityId'],StatusCodes.BAD_REQUEST);
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
}
  next();
}
async function validateUpdateRequest(req, res, next) {
  if (!req.body.address && !req.body.name && !req.body.code ) {
    (ErrorResponse.message = "Something went wrong while updating an airport"),
      (ErrorResponse.error = new AppError(
        ["Nothing to update on the update request"],
        StatusCodes.BAD_REQUEST
      ));
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  next();
}
module.exports = {
  validateCreateRequest,
  validateUpdateRequest,
};
