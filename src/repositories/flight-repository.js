const {Flight} = require("../models");
const CrudRepository = require("./crud-repository");

class FlightRepository extends CrudRepository{
    constructor(){
        super(Flight);
    }

    async getFlights(filter,sort){
        const response=await Flight.findAll({
            where:filter,
            order:sort
        })
        return response;
    }
}

module.exports=FlightRepository