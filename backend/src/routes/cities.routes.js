const { Router } = require("express");

const router = Router();

router.get("/cities", (req, res) => {
  res.send("retrievig list of cities");
});

router.post("/cities", (req, res) => {
  res.send("creating a cities");
});

router.delete("/cities", (req, res) => {
  res.send("deleting a cities");
});

module.exports = router;
