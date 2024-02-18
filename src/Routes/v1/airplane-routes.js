const express=require('express');
const { AirplaneController } = require('../../controller');
const { validateCreateRequest, validateUpdateRequest } = require('../../middlewares/airplane-middleware');

const airplaneRoutes=express.Router();

airplaneRoutes.get('/',AirplaneController.getAirplanes);
airplaneRoutes.get('/:id',AirplaneController.getAirplane);
airplaneRoutes.post('/',validateCreateRequest,AirplaneController.createAirplane);
airplaneRoutes.delete('/:id',AirplaneController.destroyAirplane);
airplaneRoutes.patch('/:id',validateUpdateRequest,AirplaneController.updateAirplane);

module.exports=airplaneRoutes;