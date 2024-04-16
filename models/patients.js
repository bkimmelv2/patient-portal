const mongoose = require('mongoose')

const patientSchema = new mongoose.Schema({
    name: {type: String, required: true},
    age: {type: Number, required: true},
    gender: String,
    insurance: {type: Boolean, required: true},
    vitals: {
        temp: {type: Number, required: true},
        heartRate: {type: Number, required: true},
        respRate: {type: Number, required: true},
        bloodPressure: {type: String, required: true},
        oxygen: {type: Number, required: true},
    }
})

const Patient = mongoose.model('Patient', patientSchema)

module.exports = Patient