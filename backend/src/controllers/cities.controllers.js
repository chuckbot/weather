const citiesService = require("../service/cities.service");

class CitiesController {
  async saveCity(req, res) {
    try {
      const id = await citiesService.saveCity(req.body);
      res.status(201).json(id);
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = new CitiesController();
