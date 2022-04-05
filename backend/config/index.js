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
        frequency: "* * * * *",
        handler: "handlers/genratedata"
    }
}