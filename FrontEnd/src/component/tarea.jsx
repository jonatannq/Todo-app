import { useState } from 'react'
import Boton from './boton.jsx'

function Tarea({lista, del, save, 
    editando, setEditando}){//Cambiar esas props

    const [textoEditado, setTextoeditado] = useState("")
    const [compare, setCompare] = useState(null)


    const setEditar = (tarea) => {
        setCompare(tarea.id)

        setTextoeditado(tarea.nombre)
        setEditando(true)
    }
    

    return(
        
        <div>
            {
                lista.map((tarea) =>  {
                    return(
                        
                        <div key={tarea.id}>
                        
                        
                            {compare === tarea.id && editando ?  (
                                <>
                                <input type="text" value={textoEditado} onChange={(e) => setTextoeditado(e.target.value)}/>
                                <Boton click={() => save(tarea.id, textoEditado)}>Guardar</Boton>
                                <Boton click={() => setEditando(false)}>Cancelar</Boton>
                                </>
                            ) : ( 
                                <>
                                <input key="radio" type="radio"  />
                                <label>{tarea.nombre}</label>
                                    
                                <Boton click={() => del(tarea.id)}>
                                    Eliminar
                                </Boton>


                                <Boton click={() => setEditar(tarea)}>
                                    Editar
                                </Boton>
                                </>
                            )}        


                    
                        
                                    
                            
                        </div>
                            
                
                    )
                })
            }
        </div>
    
    )



}

export default Tarea