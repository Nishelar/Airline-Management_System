const express=require('express');
const { CityController } = require('../../controller');
const { validateCreateRequest } = require('../../middlewares/city-middleware');

const cityRoutes=express.Router();

cityRoutes.get('/',CityController.getCities);
cityRoutes.get('/:id',CityController.getCity);
cityRoutes.post('/',validateCreateRequest,CityController.createCity);
cityRoutes.delete('/:id',CityController.destroyCity);
cityRoutes.patch('/:id',CityController.updateCity);

module.exports=cityRoutes;