import express from 'express'
import session from 'express-session'
import { MongoClient } from 'mongodb';
import { insertUser } from '../db.js';
import bcrypt from 'bcrypt'
import passport from 'passport';
import passportLocal from 'passport-local'
const sign = express.Router()

sign.use(session({
    secret: 'alio aksfh fghop rr hirfhirfhrighrgihr irhgirhg',
    resave: false,
    saveUninitialized: false
}))

sign.use(passport.initialize())
sign.use(passport.session())

sign.post('/up', async (req, res) => {
    const url = 'mongodb://localhost:27017/'
    const password = await bcrypt.hash(req.body.password, 10)
    const data = {
        ...req.body,
        password
    }
    MongoClient.connect(url).then(db => {
        const thisDb = db.db('DevelopmentBlog')
        insertUser(db, thisDb, 'users', data)
            .then(result => res.send(true))
    })
})
export default sign