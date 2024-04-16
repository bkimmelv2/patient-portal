const newPatients = [
    {
        name: 'Gregory House',
        age: 51,
        gender: 'male',
        insurance: true,
        vitals: {
            temp: 97.8,
            heartRate: 80,
            respRate: 13,
            bloodPressure: '120 / 90',
            oxygen: 100
        }
    }, 
    {
        name: 'Allison Cameron',
        age: 30,
        gender: 'female',
        insurance: true,
        vitals: {
            temp: 99,
            heartRate: 86,
            respRate: 14,
            bloodPressure: '110 / 80',
            oxygen: 99
        }
    }, 
    {
        name: 'Robert Chase',
        age: 31,
        gender: 'male',
        insurance: false,
        vitals: {
            temp: 102,
            heartRate: 105,
            respRate: 16,
            bloodPressure: '130 / 95',
            oxygen: 98
        }
    }, 
    {
        name: 'Eric Foreman',
        age: 35,
        gender: 'male',
        insurance: true,
        vitals: {
            temp: 98.3,
            heartRate: 90,
            respRate: 15,
            bloodPressure: '115 / 85',
            oxygen: 100
        }
    }
]

module.exports = newPatients