const nativeRotes = require("express").Router();
const app1Routes = require("express").Router();
const fetch = require("fetch").fetchUrl;
const { app1Port, deviceIp } = require("./constants.json");

nativeRotes.get("/", (req, res) => {
  res.status(200).json("Hello, it's main!");
});

app1Routes.get("/", (req, res) => {
  fetch(`http://${deviceIp}:${app1Port}/`, (error, meta, body) => {
    if (error) return res.status(500).json({ name: "app1", error });
    const resultString = body.toString().split('\"')[1];
    res.status(200).json(resultString);
  });
});

module.exports = {
  nativeRotes,
  app1Routes
};
