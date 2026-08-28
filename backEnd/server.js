
const express = require("express")
const app = express()

app.get("/", (req, res) => {
    res.send("Funciona")
})

app.listen(3000, () => {
    console.log("Hola mundo")
})