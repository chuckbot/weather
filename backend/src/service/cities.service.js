const citiesDAO = require("../dao/cities.dao");

class CitiesService {
  saveCity(cityName, temp, humidity) {
    return citiesDAO.saveCity(cityName, temp, humidity);
  }
}

module.exports = new CitiesService();
