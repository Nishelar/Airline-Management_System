const AppError = require("../utilities/Errors/app-Error");
const {StatusCodes}=require("http-status-codes")
class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    const response = await this.model.create(data);
    return response;
  }

  async destroy(data) {
    const response = await this.model.destroy({
      where: {
        id: data,
      },
    });
    if(!response){
      console.log(StatusCodes.NOT_FOUND);
      throw new AppError("The resource you are looking for delete doesnot exist",StatusCodes.NOT_FOUND);
    }
    return response;
  }

  async update(id, data) {
    const response = await this.model.update(data, {
      where: {
        id: id,
      },
    });
    if(response=="0"){
      throw new AppError("The resource you are looking for update doesnot exist",StatusCodes.NOT_FOUND);
    }
    return response;
  }

  async get(id) {
    const response = await this.model.findByPk(id);
    if(!response){
      throw new AppError("The resource you are looking for doesnot exist",StatusCodes.NOT_FOUND);
    }
    return response;
  }

  async getAll() {
    const response = await this.model.findAll();
    return response;
  }
}

module.exports = CrudRepository;
