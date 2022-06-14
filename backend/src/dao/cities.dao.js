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

  async deleteCity(id) {
    const data = await db.table("city").where(id, id).delete();
    return data;
  }
}

module.exports = new CitiesDAO();
