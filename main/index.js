const express = require("express");
const { nativeRotes, app1Routes } = require("./src");
const { PORT } = process.env;

const app = express();

app.use(express.json())
  .use("/api", nativeRotes)
  .use("/api/app1", app1Routes)

app.listen(PORT, err => {
  if(err) console.error(err);
  console.log(`main is runing on ${PORT}`);
});
