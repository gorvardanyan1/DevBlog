import express from "express";
import router from "./routers/mainDataPost.js";
const app = express()

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.send("<h1>HEllo MY BLog</h1>")
})

app.use('/blogs', router)

app.post('/text', (req, res) => {
    console.log(req.body);
    res.send(req.body)
})
app.listen(5000, () => console.log('Server Listened 5000 port'))