const express = require("express")
const routes = require("./routes/index")
const app = express();

console.log(routes)

app.use('/api', routes)

module.exports = app;