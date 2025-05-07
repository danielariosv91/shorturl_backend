require('dotenv').config()
const mongoose = require("mongoose")

const connectMongo = async () => {
    try {
        const monto_uri = process.env.MONGO_URI

        await mongoose.connect(monto_uri)

        console.log("Success Connection")
    } catch (error) {
        console.log(`Error connection: ${error}`)
    }
}

module.exports = connectMongo