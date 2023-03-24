const mongoose = require("mongoose")
const {model, Schema} = mongoose;


const sheduleSchema = Schema({
    title:String,
    description:String,
    location:String,
    startTime:String,
    endTime:String
})

const shedulemodel= model("shedules",sheduleSchema )

module.exports = shedulemodel;