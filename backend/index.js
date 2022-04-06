// cron jobs for regular(dummy) data for our project
const config = require('./config')
const scheduler = require('./scheduler')

scheduler.initCrons(config)


// setup api endpoint for front-end
const express = require('express')
const app = express()
var cors = require('cors')
const data = require('./static/data.json')

app.use(cors())

const fs = require('fs')

const lat = 26.348900
const long = 86.077103

app.get('/', function (req, res) {
    console.log(req.query);
    res.send({
        message: "ok",
        status: 200
    })
})
    
app.get('/api', (req, res)=> {
    fs.readFile('./static/data.json', (err, data)=>{
        const object = JSON.parse(data)
        var created_at, updated_at, last_entry_id;
        if(object.length>0){
            created_at = object[0].created_at
            updated_at = object[object.length - 1].created_at
            last_entry_id = object[object.length - 1].entry_id
        } else{
            created_at = 'NA',
            updated_at = 'NA',
            last_entry_id = 'NA'
        }
        res.json(
            {
                "channel": {
                    "id": 9,
                    "name": "House",
                    "description": "Netduino Plus connected to sensors around the house",
                    "latitude": lat,
                    "longitude": long,
                    "field1": "Temperatuer in F",
                    "field2": "Pulse Rate in BPM",
                    "created_at": created_at,
                    "updated_at": updated_at,
                    "last_entry_id": last_entry_id
                  },
                "feeds": JSON.parse(data)
            })
    })
})

app.get('/api/map', (req, res) => {
    res.json({
        "latitude": lat,
        "longitude": long,
        "map_url": `https://www.latlong.net/c/?lat=${lat}&long=${long}`
    })
})


// server set-up at any port
app.listen(5000, () =>{
    console.log(`Server started at 5000`)
})