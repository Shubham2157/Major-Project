module.exports = (req, res, lat, long)=> {
    res.json({
        "latitude": lat,
        "longitude": long,
        "map_url": `https://www.latlong.net/c/?lat=${lat}&long=${long}`
    })
}