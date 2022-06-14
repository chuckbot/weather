const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const cityRoutes = require("./routes/cities.routes");

const app = express();
app.use(express.json());

app.use(cors());
app.use(morgan("dev"));
app.use(cityRoutes);

app.listen(8000);
console.log("server on port 8000");
