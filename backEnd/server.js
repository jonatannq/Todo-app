
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


app.get("/tareas", (req, res) => {
    db.query("SELECT * FROM tareas", (error, resultado) => {
        if(error){
            return res.status(500).json({
                error: "Hubo un error al cargar las tareas"
            })
        }
        res.json(resultado)
    })
})

app.post("/tareas", (req, res) => {
    const {name} = req.body
    db.query("INSERT INTO tareas(nombre) VALUES(?)", [name], (error, resultado) => {
        if(error){
            return res.status(500).json({
                error: "Hubo un error al insertar los"
            })
        }
        res.json(resultado)
    })
})


app.delete("/tareas/:id", (req, res) => {
    const { id } = req.params
    db.query("DELETE FROM tareas WHERE id = ?", [id], (error, resultado) => {
        if(error){
            return res.status(500).json({
                error: "Hubo un error al deletear"
            })
        }
        res.json(resultado)
    })
})

app.put("/tareas/:id", (req, res) => {
    const { tarea } = req.body
    const { id } = req.params
    db.query("UPDATE tareas SET nombre = ? WHERE id = ?", [tarea, id], (error, resultado) => {
        if(error){
            return res.status(500).json({
                error: "Hubo un error al deletear"
            })
        }
        res.json(resultado)
    })
})




app.listen(3000, () => {
    console.log("Escuchando el server")
})