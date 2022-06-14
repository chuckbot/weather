const db = require("../db/db");

class CitiesDAO {
  async saveCity(cityName, temp, humidity) {
    const [id] = await db("city")
      .insert({
        city_name: cityName,
        temp,
        humidity,
      })
      .returning("id");

    return id;
  }
}

module.exports = new CitiesDAO();
