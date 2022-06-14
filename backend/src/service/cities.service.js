const citiesDAO = require("../dao/cities.dao");

class CitiesService {
  saveCity(cityDto) {
    const { cityName, temp, humidity } = cityDto;
    return citiesDAO.saveCity(cityName, temp, humidity);
  }

  getCity() {
    return citiesDAO.getCity();
  }
}

module.exports = new CitiesService();
