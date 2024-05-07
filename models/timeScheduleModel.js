const mongoose = require('mongoose')

const timeScheduleSchema = new mongoose.Schema(
    {
        timeZone: {
            type: String,
            required: true,
        },
        startDate: {
            type: Date,
            required: true,
        },
        endDate: {
            type: Date, 
            required: true
        }
    },
    {
        timestamps: true,
    },
    {
        collection: "timeSchedule"
    }
)

module.exports = mongoose.model.timeSchedule || mongoose.model('timeSchedule', timeScheduleSchema)