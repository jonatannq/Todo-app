
const express = require("express")
const mysql = require("mysql2")
const cors = require("cors")

const app = express()
app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "alon26&",
    database: "todoapp"
})


app.get("/tarea", (req, res) => {
    db.query("SELECT * FROM tareas", (error, resultado) => {
        if(error){
            console.log("Hubo un error al traer los datos")
            return 
        }
        res.json(resultado)
    })
})

app.post("/tarea", (req, res) => {
    const {name} = req.body
    db.query("INSERT INTO tareas(nombre) VALUES(?)", [name], (error, resultado) => {
        if(error){
            console.log("Hubo un error al insertar en la base de datos")
            return 
        }
        res.json(resultado)
    })
})

app.listen(3000, () => {
    console.log("Escuchando el server")
})