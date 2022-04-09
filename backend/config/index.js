module.exports = {
    runTime: {
        frequency: "* * * * *",
        handler: "handlers/minrunner"
    },
    goodbye: {
        frequency: "* * * * *",
        handler: "handlers/goodbye"
    },
    generatedata: {
        frequency: "*/10 * * * *",
        handler: "handlers/genratedata"
    }
}