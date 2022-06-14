const db = require("../db/db");

class CitiesDAO {
  async saveCity(cityName, temp, humidity) {
    const [id] = await db("city")
      .insert({
        humidity,
        temp,
        city_name: cityName,
      })
      .returning("id");

    return id;
  }

  async getCity() {
    const data = await db.select("*").from("city");
    return data;
  }
}

module.exports = new CitiesDAO();
