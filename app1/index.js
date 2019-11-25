const express = require("express");
const { PORT } = process.env;

const app = express();

app.use(express.json())
  .get("/", (req, res) => {
    res.status(200).json("Hello, it's app1!");
  });

app.listen(PORT, err => {
  if(err) return console.error(err);
  console.log(`app1 is runing on ${PORT}`);
});
