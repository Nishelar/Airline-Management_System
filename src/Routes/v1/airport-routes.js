const express=require('express');
const { AirportController } = require('../../controller');
const { validateCreateRequest, validateUpdateRequest } = require('../../middlewares/airport-middlewares');

const airportRoutes=express.Router();

airportRoutes.get('/',AirportController.getAirports);
airportRoutes.get('/:id',AirportController.getAirport);
airportRoutes.post('/',validateCreateRequest,AirportController.createAirport);
airportRoutes.delete('/:id',AirportController.destroyAirport);
airportRoutes.patch('/:id',validateUpdateRequest,AirportController.updateAirport);

module.exports=airportRoutes;