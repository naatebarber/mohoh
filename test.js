const contentful = require("contentful")

const cf = contentful.createClient({
    space: "ndcvlnh97o15",
    accessToken: "Nh6mEhjj3ySdFhs6v6yueICw3r_Cyc7a4A7q4T4hjqE"
})

cf.getEntries().then(data => console.log(data.items[0].fields))