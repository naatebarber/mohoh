const express = require("express")
const fs = require("fs")
const app = express()
    .use(express.json())
    .use(express.urlencoded({ extended: false }))

const contentful = require("contentful")

const cf = contentful.createClient({
    space: "ndcvlnh97o15",
    accessToken: "Nh6mEhjj3ySdFhs6v6yueICw3r_Cyc7a4A7q4T4hjqE"
})

if(process.env.SHOW_MODE == "server-dev") {
    app.use(express.static(__dirname + "/wip"))
} else {
    app.use(express.static(__dirname + "/build"))
}

app.get("/get-entries", (req, res) => {
    cf.getEntries()
        .then(data => res.send(data))
})

app.listen(8085, () => console.log("server started"))