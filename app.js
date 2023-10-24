// app.js
const express = require('express');
const app = express();
const port = 3000
require("dotenv").config()
const todoRoutes = require('./routes/todo');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use('/', todoRoutes);

if(process.env.NODE_ENV != "test"){
  app.listen(port, () => {
      console.log(`App listening on http://localhost:${port}`)
  })
}

module.exports = app