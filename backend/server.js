const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());

require("./routes/router")(app);

require("dotenv").config();

let corsOption = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOption));

const db = require("./models");
db.sequelize.sync();

app.get("/", (req, res) => {
  res.json({ message: "Simple response of API" });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
