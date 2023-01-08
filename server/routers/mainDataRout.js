import express from 'express'
const router = express.Router()
import { MongoClient, ObjectId } from 'mongodb'
import { insertUser } from '../db.js'
import { getUTCFunction } from '../getUTCfunction.js'
import { findBlogs, findBlog } from '../db.js'

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
        insertUser(db, blodDb, 'blogs', data).then(result => res.send(result))
    })
})
router.get('/mainBlogs', (req, res) => {

    MongoClient.connect('mongodb://localhost:27017/').then(db => {
        const blodDb = db.db('DevelopmentBlog')
        findBlogs(db, blodDb, 'blogs').then(result => res.send(result))
    })

})
router.get('/blog/:id', (req, res) => {
    MongoClient.connect('mongodb://localhost:27017/').then(db => {
        const blogDb = db.db('DevelopmentBlog')
        findBlog(db, blogDb, 'blogs', { _id: ObjectId(req.params.id) })
            .then(result => res.send(result))
    })

})

export default router