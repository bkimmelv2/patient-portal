const express = require('express')
const app = express()
const mongoose = require('mongoose')
const methodOverride = require('method-override')
require('dotenv').config()
const mongoURI = process.env.MONGO_URI
const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Patient Portal is running on port ${PORT}`)
})