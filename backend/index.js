// server ----
const express = require('express')
const cors = require('cors')

const utils = require('./utils')
const mapendpoint = require('./utils/mapendpoint')
const invalidendpoint = require('./utils/invalidendpoint')
const apiendpoint = require('./utils/apiendpoint')

const cronjobscript = require('./cronjobscript')
// cron job script runner
cronjobscript()

const app = express()
app.use(cors())

const lat = 26.348900
const long = 86.077103

// setup api endpoint for front-end
app.get('/', function (req, res) {
    utils(req,res)
})
    
app.get('/api', (req, res)=> {
    apiendpoint(req, res, lat, long)
})

app.get('/api/map', (req, res) => {
    mapendpoint(req, res, lat, long)
})

app.get('*', (req, res)=>{
    invalidendpoint(req, res)
})


// server set-up at any port
app.listen(5000, () =>{
    console.log(`Server started at 5000`)
})