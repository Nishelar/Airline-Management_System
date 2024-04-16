'use strict';
const {seatTypes}=require('../utilities/Common');
const {ECONOMY,BUSINESS,FIRST_CLASS,PREMIUM_ECONOMY}=seatTypes;
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Seat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Airport,{
        foreignKey:'airplaneId'
      })
    }
  }
  Seat.init({
    airplaneId: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    row: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    col: {
      type:DataTypes.STRING,
      allowNull:false
    },
    seatType: {
      type:DataTypes.ENUM,
      values:[ECONOMY,PREMIUM_ECONOMY,BUSINESS,FIRST_CLASS],
      defaultValue:ECONOMY,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'Seat',
  });
  return Seat;
};