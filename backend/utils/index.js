module.exports = (req, res,  lat, long) =>{

    const data = require('../static/data.json')
    const fs = require('fs')


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

}