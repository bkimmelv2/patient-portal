const express = require('express')
const app = express()
const mongoose = require('mongoose')
const methodOverride = require('method-override')
require('dotenv').config()
const mongoURI = process.env.MONGO_URI
const PORT = process.env.PORT

// MIDDLEWARE //
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))
app.use(express.static('public'))

// CONTROLLERS //
const patientsController = require('./controllers/patients.js')
app.use('/patients', patientsController)

// MONGO CONNECTION //
mongoose.connect(mongoURI)
const db = mongoose.connection
db.on('error', (err) => console.log(err.message + 'error with mongo connection'))
db.on('connected', () => console.log('mongo is connected'))
db.on('disconnected', () => console.log('mongo disconnected'))

// SERVER //
app.listen(PORT, () => {
    console.log(`Patient Portal is running on port ${PORT}`)
})

// MONGODB ATLAS CONNECTION: mongodb+srv://bkimmel:Elizabella@sei.suijnuk.mongodb.net/?retryWrites=true&w=majority&appName=SEI