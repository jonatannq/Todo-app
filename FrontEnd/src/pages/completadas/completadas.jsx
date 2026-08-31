import { useEffect, useState } from "react"



 function Completadas() {
    const [completas, setCompletas] = useState([])
    
    useEffect(() =>  {
        const get = async () => {
            const respuesta = await fetch("http://localhost:3000/tareascomplete");
            const data = await respuesta.json()
            setCompletas(data)
        }
        get()
    }, [])
    return(
        <div>
            
            <div>
                <p>Tareas completadas: {completas.length}</p>
                {completas.map((tarea) => {
                    return(
                        <div key={tarea.id}>
                            <p>{tarea.nombre}</p>
                        </div>
                        
                    )
                   
                })}
            </div>
        </div>
    )
 }
 export default Completadas