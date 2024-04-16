"use strict";

const { DATE } = require("sequelize");
const { ECONOMY } = require("../utilities/Common/enum");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("Seats", [
      {
        airplaneId: 1,
        row: 1,
        col: "A",
        seatType: ECONOMY,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        airplaneId: 1,
        row: 1,
        col: "B",
        seatType: ECONOMY,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        airplaneId: 1,
        row: 1,
        col: "C",
        seatType: ECONOMY,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        airplaneId: 1,
        row: 1,
        col: "D",
        seatType: ECONOMY,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        airplaneId: 1,
        row: 1,
        col: "E",
        seatType: ECONOMY,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        airplaneId: 1,
        row: 1,
        col: "F",
        seatType: ECONOMY,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        airplaneId: 1,
        row: 2,
        col: "A",
        seatType: ECONOMY,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        airplaneId: 1,
        row: 2,
        col: "B",
        seatType: ECONOMY,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        airplaneId: 1,
        row: 2,
        col: "C",
        seatType: ECONOMY,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        airplaneId: 1,
        row: 2,
        col: "D",
        seatType: ECONOMY,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        airplaneId: 1,
        row: 2,
        col: "E",
        seatType: ECONOMY,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        airplaneId: 1,
        row: 2,
        col: "F",
        seatType: ECONOMY,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Seats");
  },
};
