import express from 'express'
const router = express.Router()
import { MongoClient } from 'mongodb'
import { insertUser } from '../db.js'
import { getUTCFunction } from '../getUTCfunction.js'


router.post('/addMainData', (req, res) => {
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

export default router