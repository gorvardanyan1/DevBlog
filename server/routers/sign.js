import express from 'express'
import session from 'express-session'
import { MongoClient } from 'mongodb';
import { insertUser, findUser } from '../db.js';

import cors from 'cors'
const sign = express.Router()
sign.use(session({
    secret: 'alioaksfhfghoprrhirfhirfhrighrgihrirhgirhg',
    resave: false,
    saveUninitialized: false
}))
sign.use(cors({
    origin: 'http://localhost:3000/',
    credentials: true
}))

sign.post('/in', (req, res) => { })

sign.post('/up', async (req, res) => {
    const password = await bcrypt.hash(req.body.password, 5)
    const data = {
        ...req.body,
        password
    }
    insertUser('DevelopmentBlog', 'users', data)
        .then(res.send(true))

})
export default sign