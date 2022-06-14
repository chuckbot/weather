const { Router } = require("express");
const citiesController = require("../controllers/cities.controllers");

const router = Router();

router.get("/cities", (req, res) => {
  res.send("listing cities");
});

router.post("/cities", citiesController.saveCity);

router.delete("/cities", (req, res) => {
  res.send("deleting a cities");
});

module.exports = router;
