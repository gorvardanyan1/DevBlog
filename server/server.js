import express from "express";
import sign from "./routers/sign.js";
import cors from "cors"
const app = express()

app.use(express.json())

app.use(express.urlencoded({ extended: true }))
app.use(cors({
    origin: 'http://localhost:3000/',
    credentials: true,
}))


app.use('/sign', sign)


app.listen(5000, () => console.log('Server Listened 5000 port'))