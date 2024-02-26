const { CityRepository } = require("../repositories");
const AppError = require("../utilities/Errors/app-Error");
const cityRepository = new CityRepository();
const { StatusCodes } = require("http-status-codes");
async function createCity(data) {
  try {
    const city = await cityRepository.create(data);
    return city;
  } catch (error) {
    if (error.name == "SequelizeValidationError") {
      let explanation = [];
      error.errors.forEach((err) => {
        explanation.push(err.message);
      });
      throw new AppError(explanation, StatusCodes.BAD_REQUEST);
    }
    throw new AppError(
      "Cannot create a new city",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getCity(id) {
  try {
    const city = await cityRepository.get(id);
    return city;
  } catch (error) {
    if (error.statusCode == StatusCodes.NOT_FOUND) {
      throw new AppError(
        "city you are looking for doesnot exist",
        error.statusCode
      );
    }
    throw new AppError(
      "Cannot fetch the city details you are looking for",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getCities() {
  try {
    const cities = await cityRepository.getAll();
    return cities;
  } catch (error) {
    throw new AppError(
      "Cannot find the city details",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function updateCity(id, data) {
  try {
    const city = await cityRepository.update(id, data);
    return city;
  } catch (error) {
    if (error.statusCode == StatusCodes.NOT_FOUND) {
      throw new AppError(
        "city you are looking to update doesnot exist",
        error.statusCode
      );
    }
    throw new AppError(
      "Cannot update the city details",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function destroyCity(id) {
  try {
    const city = await cityRepository.destroy(id);
    return city;
  } catch (error) {
    if (error.statusCode == StatusCodes.NOT_FOUND) {
      throw new AppError(
        "city you are looking for delete doesnot exist",
        error.statusCode
      );
    }
    throw new AppError(
      "Cannot delete the city details",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

module.exports = {
  createCity,
  updateCity,
  destroyCity,
  getCity,
  getCities,
};
