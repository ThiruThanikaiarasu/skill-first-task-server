const dotenv = require('dotenv')
dotenv.config()

const { PORT, DB_URI } = process.env

module.exports = {
    PORT,
    DB_URI
}