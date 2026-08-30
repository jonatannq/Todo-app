import { useState, useEffect } from "react"
import Tarea from '../../component/tarea/tarea.jsx'
import Boton from '../../component/boton/boton.jsx'

import styles from './home.module.scss'

function Home(){
    const [tarea, setTarea] = useState("")
    const [tareas, setTareas] = useState([])
    const [editando, setEditando] = useState(false)

    const [errores, setErrores] = useState([])

    const cargarTareas = async () => {
            try {
                const respuesta = await fetch("http://localhost:3000/tareas")
                const data = await respuesta.json()
                setTareas(data)
            } catch (error) {
                console.log("Hubo un error al cargar: ", error)
            }
    }

    useEffect(() =>{
        
        cargarTareas()
    },[])


    //Agregar Tarea
    const handleAdd = async () => {
        const limpiarTarea = tarea.trim()
        if(!limpiarTarea){
            alert("Tarea vacia")
            return
        }

        try {
            const respuesta = await fetch("http://localhost:3000/tareas", {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify({
                name: limpiarTarea
                })
            })
            
            if(!respuesta.ok){
                throw new Error("Hubo un error en la respuesta")
            }

            const data = await respuesta.json()
            setTarea("")
            cargarTareas()

        } catch (error) {
        console.log("Hubo un error : ", error)
        }
    } //Fin de evento agregar tarea

    const handleDelete = async (id) => {
        try {
            const respuesta = await fetch(`http://localhost:3000/tareas/${id}`, {
                method: "DELETE"
            })

            if(!respuesta.ok){
                throw new Error("Hubo un error en la respuesta")
            }

            const data = await respuesta.json()
            console.log(data)
            cargarTareas()
        } catch (error) {
            console.log("GGG")
        }
    }


    const handleSave = async (id, tareaEditada) => {
        const tarea = tareaEditada.trim()
        if(!tarea){
            alert("No pueden ir tareas vacias")
            return
             
        }
        
        try {
            const respuesta = await fetch(`http://localhost:3000/tareas/${id}`, {
                method: "PUT", 
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    tarea: tarea
                })
            })

            const data = await respuesta.json()
        } catch (error) {
            console.log("HUBO UN ERROR")
        }

        setEditando(false)
        cargarTareas()
    }


    return (
        <>
        <h1>Todo App List</h1>

        <Tarea 
            lista={tareas}
            del={handleDelete}
            save={handleSave}

            //Factorizar
            editando={editando}
            setEditando={setEditando}
        />
        

        <div>
            <input className={styles.input} type="text" value={tarea} placeholder="Escribe tu tarea" onChange={(e) => setTarea(e.target.value)} />
            <Boton  click={handleAdd} >
                Agregar
            </Boton>
        </div>
    </>
    )
}

export default Home