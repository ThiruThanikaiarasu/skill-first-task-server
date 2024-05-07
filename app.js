require('dotenv').config()
const express = require('express')
const app = express()

const cors = require('cors')
const bodyParser = require('body-parser')

const { PORT } = require('./config/config')
const connect = require('./database/connection')

const timeScheduleRoute = require('./routes/timeScheduleRoute')

app.use(cors())
app.use(bodyParser.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (request, response) => {
    response.status(200).send({ message: "It's working ✌️"})
})

app.use('/api/v1', timeScheduleRoute)

connect()
    .then( () => {
        try{
            app.listen(PORT, console.log(`Server is running at: http://localhost:${PORT}`))
        }
        catch(error) {
            console.log(`Can't connect to database: ${error}`)
        }
    })
    .catch(error => {
        console.log(`Error while connecting to database; ${error}`)
    })
