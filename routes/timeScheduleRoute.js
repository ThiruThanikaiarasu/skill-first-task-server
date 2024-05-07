const express = require('express')
const { addNewTime, getLastSchedule } = require('../controller/timeScheduleController')
const router = express.Router()

router.get('/latest-time-shedule', getLastSchedule)

router.post('/add-time', addNewTime)


module.exports = router