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
const Note = require("./src/model/Note");

app.enable("trust proxy");

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "./build")));
} else {
  app.get("/", (req, res) => {
    res.send(`API is running on ${process.env.NODE_ENV}`);
  });
}

app.use(express.urlencoded({ extended: true }));

// parse application/json
app.use(express.json());

// app.get("/reference", (req, res) =>
//   res.sendFile(path.resolve(__dirname, "build", "index.html"))
// );

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
