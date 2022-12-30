import express from "express";
import { MongoClient } from "mongodb";
import { insertUser } from "./db.js";
import { getUTCFunction } from "./getUTCfunction.js";
getUTCFunction()
const app = express()
app.use(express.json())
app.get("/", (req, res) => {
    res.send("<h1>HEllo MY BLog</h1>")
})

app.post('/addMainData', (req, res) => {
    const url = 'mongodb://localhost:27017/'
    const data = {
        ...req.body,
        submitedDate: getUTCFunction(),
        like: 0,
        comments: [

        ],
        save: 0
    }
    MongoClient.connect(url).then(db => {
        const blodDb = db.db('DevelopmentBlog')
        insertUser(db, blodDb, 'mainRegisterData', data).then(result => res.send(result))
    })
})
app.listen(5000, () => console.log('Server Listened 5000 port'))
