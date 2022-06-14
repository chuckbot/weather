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

  async getCity(req, res) {
    const id = await citiesService.getCity();
    res.status(200).json(id);
  }
}

module.exports = new CitiesController();
