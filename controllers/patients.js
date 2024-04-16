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

// NEW //
router.get('/new', (req, res) => {
    res.render('new.ejs')
})

// SHOW //
router.get('/:id', async (req, res) => {
    const foundPatient = await Patient.findById(req.params.id)
    res.render('show.ejs', {
        patient: foundPatient
    })
})

// EDIT //


/////////////////////////////////////////////////////////////////////////////

// NEW (POST) //
router.post('/', async (req, res) => {
    req.body.insurance = req.body.insurance ? true : false
    try {
        const newPatient = await Patient.create(req.body)
        res.redirect('/patients')
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
})

module.exports = router