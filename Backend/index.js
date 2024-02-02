const database=require("./config/db")
const express = require('express');
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.send(`<h1>learning sql app is running....</h1>`);
})

app.listen(7000, () => {
  console.log("running port on---7000",);
})