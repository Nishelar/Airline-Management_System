const {Flight,Airplane,Airport, Sequelize,City} = require("../models");
const CrudRepository = require("./crud-repository");

class FlightRepository extends CrudRepository{
    constructor(){
        super(Flight);
    }

    async getFlights(filter,sort){
        const response=await Flight.findAll({
            where:filter,
            order:sort,
            include:[{
                model:Airplane,
                require:true,
                as:'airplaneDetails'
            },{
                model:Airport,
                require:true,
                as:'departureAirport',
                on:{
                    col1:Sequelize.where(Sequelize.col("Flight.departureAirportId"),"=",Sequelize.col("departureAirport.code"))
                },
                include:{
                   model:City,
                   require:true
                }
            },
            {
                model:Airport,
                require:true,
                as:'arrivalAirport',
                on:{
                    col1:Sequelize.where(Sequelize.col("Flight.arrivalAirportId"),"=",Sequelize.col("arrivalAirport.code"))
                },
                include:{
                   model:City,
                   require:true
                }
            }
        ]
    
        })
        return response;
    }
}

module.exports=FlightRepository