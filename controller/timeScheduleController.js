const timeScheduleModel = require('../models/timeScheduleModel')

const addNewTime = async (request, response) => {
    const { timeZone, startDate, endDate } = request.body
    try{
        const newTime = new timeScheduleModel({
            timeZone,
            startDate,
            endDate
        })
        await newTime.save()
        response.status(201).send({ message: "Added successfully"})
    }
    catch(error) {
        response.status(500).send(error)
    }

}

const getLastSchedule = async (request, response) => {
    try{
        console.log("hello")
        const lastTimeScheduled = await timeScheduleModel.aggregate([
            { $sort: { createdAt: -1 } },
            { $limit: 1 }
        ])
        console.log(lastTimeScheduled)
        response.status(200).send({ message: "Data sent.", })
    }
    catch(error){
        response.status(500).send(error)
    }
}

module.exports = {
    addNewTime,
    getLastSchedule
}