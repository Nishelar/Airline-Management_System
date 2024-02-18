const { AirplaneRepository } = require("../repositories");
const AppError=require("../utilities/Errors/app-Error")
const airplaneRepository=new AirplaneRepository();
const {StatusCodes}=require('http-status-codes')

async function createAirplane(data){
    try{
     const airplane=await airplaneRepository.create(data)
     return airplane;
    }
    catch(error){
        throw new AppError('Cannot create a new Airplane',StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

async function getAirplane(id){
    try {
        const airplane=await airplaneRepository.get(id);
        return airplane;
    } catch (error) {
        if(error.statusCode==StatusCodes.NOT_FOUND){
            throw new AppError('Airplane you are looking for doesnot exist',error.statusCode);
        }
        throw new AppError('Cannot fetch the airplane details you are looking for',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAirplanes(){
    try {
        const airplanes=await airplaneRepository.getAll();
        return airplanes;
    } catch (error) {
        throw new AppError('Cannot find the airplane details',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function updateAirplane(id,data){
    try {
        const airplane=await airplaneRepository.update(id,data);
        return airplane;
    } catch (error) {
        if(error.statusCode==StatusCodes.NOT_FOUND){
            throw new AppError('Airplane you are looking to update doesnot exist',error.statusCode);
        }
        throw new AppError('Cannot update the airplane details',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function destroyAirplane(id){
    try {
        const airplane=await airplaneRepository.destroy(id);
        return airplane;
    } catch (error) {
        if(error.statusCode==StatusCodes.NOT_FOUND){
            throw new AppError('Airplane you are looking for delete doesnot exist',error.statusCode);
        }
        throw new AppError('Cannot delete the airplane details',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports={
    createAirplane,
    updateAirplane,
    destroyAirplane,
    getAirplane,
    getAirplanes
}