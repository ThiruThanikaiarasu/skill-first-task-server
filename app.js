require('dotenv').config()
const express = require('express')
const app = express()

const { PORT } = require('./config/config')

app.get('/', (request, response) => {
    response.status(200).send({ message: "It's working ✌️"})
})

app.listen(PORT, console.log(`Server is running at: http://localhost:${PORT}`))