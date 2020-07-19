const express = require("express")
const fs = require("fs")
const contentful = require("contentful")
const nodemailer = require("nodemailer")
const path = require("path")

const cf = contentful.createClient({
    space: "ndcvlnh97o15",
    accessToken: "Nh6mEhjj3ySdFhs6v6yueICw3r_Cyc7a4A7q4T4hjqE"
})

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'mohohdesign@gmail.com',
        pass: 'pancake54321'
    }
});

const app = express()
    .use(express.json())
    .use(express.urlencoded({ extended: false }))
    .use(express.static(__dirname + "/build"))
    .get("/get-entries", (req, res) => {
        cf.getEntries()
            .then(data => res.send(data))
    })
    .post("/email-hope", (req, res) => {
        let data = Object.keys(req.body).map(e => `${e}: ${req.body[e]}`).join("\n")
        console.log(req.body, data);
        const mailOptions = {
            from: 'mohohdesign@gmail.com',
            to: 'mohohdesign@gmail.com',
            subject: `You've received a new query!`,
            text: `-- MESSAGE BELOW --\n\n\n${data}`
        };
        transporter.sendMail(mailOptions, function(error, info) {
            if (error) {
                return res.status(500).end()
            } else {
                return res.status(200).end()
            }
        })
    })
    .get('/*', function(req, res) {
        res.sendFile(path.join(__dirname, 'build/index.html'), function(err) {
          if (err) {
            res.status(500).send(err)
          }
        })
      })
    .listen(8085, () => console.log("server started"))