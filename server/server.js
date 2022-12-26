import express from "express";

const app = express()

app.get("/", (req, res) => res.send("<h1>HEllo MY BLog</h1>"))
app.get("/blogs/:id", (req, res) => res.send(req.params.id))
app.listen(5000, () => console.log('Server Listened 5000 port'))