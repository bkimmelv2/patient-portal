const express = require('express')
const router = express.Router()
const Patient = require('../models/patients.js')
const newPatients = require('../models/seedData.js')

// INDEX //
router.get('/', async (req, res) => {
    const foundPatients = await Patient.find()
    res.render('index.ejs', {
        patients: foundPatients
    })
})

// SEED DATA //
router.get('/seed', async (req, res) => {
    try {
        const seedItems = await Patient.create(newPatients)
        console.log(seedItems)
        res.redirect('/patients')
    } catch (err) {
        res.send(err.message)
    }
})

module.exports = router