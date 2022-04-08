module.exports = () => {
    // cron jobs for regular(dummy) data for our project
    const config = require('./config')
    const scheduler = require('./scheduler')

    scheduler.initCrons(config)
}