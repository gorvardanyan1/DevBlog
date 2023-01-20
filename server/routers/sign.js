import express from 'express'
import session from 'express-session'
import { MongoClient } from 'mongodb';
import { insertUser, findUser } from '../db.js';
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
passport.use(new passportLocal.Strategy({ usernameField: 'userName' },
    async (userName, password, done) => {
        const user = await findUser('DevelopmentBlog', 'users', { userName: userName, password: password })
        console.log(user);
        if (user === undefined) {
            return done(null, null, { message: 'Incorrect userName' })
        }
        if (await bcrypt.compare(password, user.password)) {
            return done(null, user)
        }
        done(null, null, { message: 'Incorrect password' })
    }))
passport.serializeUser((user, done) => {
    done(null, user._id);
})
passport.deserializeUser(async (id, done) => {
    const userSerialezed = await findUser('DevelopmentBlog', 'users', { _id: id })
    done(null, userSerialezed)
})
sign.post('/in', passport.authenticate('local', {
    successMessage: "done",
    failureMessage: 'rejected'
}))
// sign.post('/flan', async (req, res) => {
//     const user = await findUser('DevelopmentBlog', 'users', { userName: req.body.userName, password: req.body.password })
//     console.log(user);
//     res.send(user)
// })
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