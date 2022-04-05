module.exports = () => {
    console.log("Script Loading ......");

    // generate 2 random number
    const minTemp = 20;
    const maxTemp = 30;

    // generating a random number
    const temp = Math.floor(Math.random() * (maxTemp - minTemp + 1)) + minTemp;

    // display a random number
    console.log(`Random Temp value between ${minTemp} and ${maxTemp} is ${temp}`);


    // generate 2 random number
    const minHeart = 30;
    const maxHeart = 40;

    // generating a random number
    const heartBeat = Math.floor(Math.random() * (maxHeart - minHeart + 1)) + minHeart; 

    // display a random number
    console.log(`Random HeartBeat value between ${minHeart} and ${maxHeart} is ${heartBeat}`);

    // push the data in json
    const fs = require('fs')

    fs.readFile('./static/data.json', (err, data)=>{
        var json = JSON.parse(data)
        json.push({
            "created_at": new Date().toLocaleString(),
            "entry_id": json[json.length - 1].entry_id + 1,
            "field1": temp,
            "field2": heartBeat
        })
        fs.writeFile('./static/data.json', JSON.stringify(json), (err)=>{
            if(err){
                // log uncessessfull error
                console.log(err);
            }
        })
    })
    
    console.log("Script executed successfully");

}