const mongoose = require('mongoose')
const { DB_URI } = require('../config/config')

const connectToDatabase = async () => {
    await mongoose.connect(DB_URI)
    console.log("Connected to db successfully")
}

module.exports = connectToDatabase