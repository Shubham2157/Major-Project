// cron jobs for regular(dummy) data for our project
const config = require('./config')
const scheduler = require('./scheduler')

scheduler.initCrons(config)


// setup api endpoint for front-end
const express = require('express')
const app = express()
var cors = require('cors')
const utils = require('./utils')
const mapendpoint = require('./utils/mapendpoint')

app.use(cors())

const lat = 26.348900
const long = 86.077103

app.get('/', function (req, res) {
    res.send({
        message: "ok",
        status: 200
    })
})
    
app.get('/api', (req, res)=> {
       utils(req, res, lat, long)
})

app.get('/api/map', (req, res) => {
    mapendpoint(req, res, lat, long)
})

app.get('*', (req, res)=>{
    res.json({
        "message": "Sorry!!! This is not valid endpoint",
        "status": "Cool!!",
        "code": 200
    })
})


// server set-up at any port
app.listen(5000, () =>{
    console.log(`Server started at 5000`)
})