const citiesService = require("../service/cities.service");

class CitiesController {
  async saveCity(req, res) {
    try {
      const id = await citiesService.saveCity(req.body);
      res.status(201).json(id);
    } catch (error) {
      console.error(error.message);
    }
  }

  async getCity(req, res) {
    try {
      const id = await citiesService.getCity();
      res.status(200).json(id);
    } catch (error) {
      console.error(error.message);
    }
  }

  async deleteCity(req, res) {
    try {
      const id = await citiesService.deleteCity(req.params);
      res.status(204).json(id);
    } catch (error) {
      console.error(error.message);
    }
  }
}

module.exports = new CitiesController();
