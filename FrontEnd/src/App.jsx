import { useState } from "react"
import Tarea from './component/tarea.jsx'

function App() {

  const [tarea, setTarea] = useState("")
  const [tareas, setTareas] = useState([])

  const handleAdd = (e) => {
    e.preventDefault()
    if(!tarea){
        alert("Tarea vacia")
        return
    }

    setTareas([...tareas, tarea])
    setTarea("")
  } 


  return (
    <>
      <h1>Todo App List</h1>

      {
        tareas.map((tarea) => {
          return(
            <Tarea name={tarea}/>
          )
        })
      }
      
      <form onSubmit={handleAdd}>
        <input type="text" value={tarea} placeholder="Escribe tu tarea" onChange={(e) => setTarea(e.target.value)} />
        <button>YES</button>
      </form>

    </>
  )
  
  


}

export default App
