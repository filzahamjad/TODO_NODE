const express = require("express");
const routes = require("./controllers/routes");
const mongoose = require("mongoose");
const uri = require("./config/MongoURI");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

mongoose
  .connect(uri, { useNewUrlParser: true })
  .then(() => console.log("Connected!"));

app.use(routes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log("started on port : " + PORT));
