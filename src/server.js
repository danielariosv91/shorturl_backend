require('dotenv').config()


const http = require("http")
const app = require("./app")
const connectMongo = require("./config/mongo")

/** connect to database */
connectMongo()

/** run server */
const server = http.createServer(app);
const PORT = process.env.PORT || 4001;

server.listen(PORT, () => { console.log(`Server running on port: ${PORT}`) })