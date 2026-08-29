import { useState, useEffect } from "react"
import Tarea from '../component/tarea.jsx'
import Boton from '../component/boton.jsx'


function Home(){
    const [tarea, setTarea] = useState("")
    const [tareas, setTareas] = useState([])


    useEffect(() =>{
        const cargarTareas = async () => {
            try {
                const respuesta = await fetch("http://localhost:3000/tareas")
                const data = await respuesta.json()
                setTareas(data)
            } catch (error) {
                console.log("Hubo un error al cargar: ", error)
            }
        }
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
        } catch (error) {
            console.log("GGG")
        }
    }

    return (
        <>
        <h1>Todo App List</h1>

        <Tarea 
            lista={tareas}
            click={handleDelete}
        />
        
        <div>
            <input type="text" value={tarea} placeholder="Escribe tu tarea" onChange={(e) => setTarea(e.target.value)} />
            <Boton click={handleAdd} >
                Agregar
            </Boton>
        </div>
    </>
    )
}

export default Home