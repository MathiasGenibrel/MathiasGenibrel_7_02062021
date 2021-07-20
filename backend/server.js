const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use("/assets", express.static("assets"));  
app.use(express.json());

require("./routes/router")(app);

require("dotenv").config();

app.use(cors());

const db = require("./models");
db.sequelize.sync();

app.get("/", cors(), (req, res) => {
  res.json({ message: "Simple response of API" });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
