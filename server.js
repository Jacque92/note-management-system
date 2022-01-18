const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const referenceRoute = require("./src/route/reference");
const thoughtRoute = require("./src/route/thought");
const writingRoute = require("./src/route/writing");

app.enable("trust proxy");
app.use(express.static(path.join(__dirname, "./build")));

dotenv.config();
app.use(cors());

app.use("/reference", referenceRoute);
app.use("/thought", thoughtRoute);
app.use("/writing", writingRoute);
//connect to DB
async function connect() {
  try {
    await mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true });
    console.log("Successfully connected to Database");
  } catch (error) {
    console.log("Failed to connect to Database");
    console.log(error);
  }
}
connect();

app.listen(process.env.PORT || 8080, () => {
  console.log("Your app is running on port 8080");
});
module.exports = app;
