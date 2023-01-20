import express from "express";
import sign from "./routers/sign.js";
const app = express()

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

// app.use('/blogs', router)

app.use('/sign', sign)


app.listen(5000, () => console.log('Server Listened 5000 port'))