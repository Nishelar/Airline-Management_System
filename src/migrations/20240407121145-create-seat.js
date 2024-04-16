'use strict';
/** @type {import('sequelize-cli').Migration} */
const {seatTypes}=require('../utilities/Common');
const {ECONOMY,BUSINESS,FIRST_CLASS,PREMIUM_ECONOMY}=seatTypes;
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Seats', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      airplaneId: {
        type: Sequelize.INTEGER,
        references:{
          model:'Airplanes',
          key:'id'
        },
        allowNull:false,
      },
      row: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      col: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      seatType: {
        type: Sequelize.ENUM,
        values: [ECONOMY,PREMIUM_ECONOMY,BUSINESS,FIRST_CLASS] ,
        defaultValue:ECONOMY,
        allowNull:false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Seats');
  }
};