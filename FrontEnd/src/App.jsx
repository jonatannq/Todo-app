import { useState, useEffect, use } from "react"
import Tarea from './component/tarea.jsx'
import Boton from './component/boton.jsx'

function App() {

  const [tarea, setTarea] = useState("")
  const [tareas, setTareas] = useState([])

  useEffect(() =>{
    const cargarTareas = async () => {
      try {
        const respuesta = await fetch("http://localhost:3000/tarea")
        const data = await respuesta.json()
        setTareas(data)
      } catch (error) {
        console.log("Hubo un error al cargar: ", error)
      }
    }
    cargarTareas()
  },[])


  const handleAdd = async () => {

    if(!tarea){
        alert("Tarea vacia")
        return
    }

    try {
      const respuesta = await fetch("http://localhost:3000/tarea", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: tarea
        })
      })
      
      const data = await respuesta.json()
      setTarea("")

    } catch (error) {
      console.log("Hubo un error : ", error)
    }

    
  } 


  return (
    <>
      <h1>Todo App List</h1>

      {
        tareas.map((tarea) => {
          return(
            <Tarea 
              key={tarea.id}
              id={tarea.id}
              name={tarea.nombre}
            />
          )
        })
      }
      
      <div>
        <input type="text" value={tarea} placeholder="Escribe tu tarea" onChange={(e) => setTarea(e.target.value)} />
        <Boton click={handleAdd} >
          Funciona
        </Boton>
      </div>

    </>
  )
  
  


}

export default App
