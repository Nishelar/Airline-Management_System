const express=require('express');
const { FlightController } = require('../../controller');
const { validateCreateRequest } = require('../../middlewares/flight-middleware');

const flightRoutes=express.Router();

flightRoutes.post('/',validateCreateRequest,FlightController.createFlight);

flightRoutes.get('/',FlightController.getFlights);

flightRoutes.get('/:id',FlightController.getFlight);

flightRoutes.patch('/:id/seats',FlightController.updateSeats);

module.exports=flightRoutes;