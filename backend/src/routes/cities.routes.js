const { Router } = require("express");
const citiesController = require("../controllers/cities.controllers");

const router = Router();

router.get("/cities", citiesController.getCity);

router.post("/cities", citiesController.saveCity);

router.delete("/cities", (req, res) => {
  res.send("deleting a cities");
});

module.exports = router;
