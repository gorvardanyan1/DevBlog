import express from 'express'
import session from 'express-session'
import { insertUser, findUser } from '../db.js';
import bcrypt from 'bcrypt'
import cors from 'cors'

const sign = express.Router()

sign.use(session({
    secret: 'alioaksfhfghoprrhirfhirfhrighrgihrirhgirhg',
    cookie: { maxAge: 60000 },
    resave: false,
    saveUninitialized: true,

}))
// sign.use(cors({
//     origin: 'http://localhost:3000/',
//     credentials: true,
// }))

sign.post('/in', async (req, res) => {
    const { userName, password } = req.body
    const user = await findUser('DevelopmentBlog', 'users', { userName })
    const isCompare = await bcrypt.compare(password, user.password)
    if (user && isCompare) {
        req.session.auth = true
        req.session.userName = userName
        req.session.userId = user._id
        res.send({ user: user._id })
    }
    else {
        res.sendStatus(403)
    }

})

sign.post('/up', async (req, res) => {
    const password = await bcrypt.hash(req.body.password, 10)
    const data = {
        ...req.body,
        password
    }
    insertUser('DevelopmentBlog', 'users', data)
        .then(res.sendStatus(200))

})
export default sign