import { useState } from 'react'
import Boton from '../boton/boton.jsx'
import styles from './tarea.module.scss'

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
            {lista.map((tarea) =>  {
                return(
                    <div className={styles.content} key={tarea.id}>
                        {compare === tarea.id && editando ?  (
                            <>
                            <input type="text" autoFocus value={textoEditado} onChange={(e) => setTextoeditado(e.target.value)}/>
                            <Boton click={() => save(tarea.id, textoEditado)}>
                                Guardar
                            </Boton>
                            <Boton click={() => setEditando(false)}>
                                Cancelar
                            </Boton>
                            </>
                        ) : ( 
                            <>
                            <div className={styles.flex}>
                                <div>
                                    <input id={`tarea-${tarea.id}`} onClick={() => alert("tarea completada")} type="radio"  />
                                    <label htmlFor={`tarea-${tarea.id}`}>{tarea.nombre}</label>
                                </div>

                                <div>
                                    <Boton variant='delete' click={() => del(tarea.id)}>
                                        Eliminar
                                    </Boton>
                                    <Boton click={() => setEditar(tarea)}>
                                        Editar
                                    </Boton>
                                </div>
                            </div>
                            </>
                            )}                                           
                    </div>
                )
            })//cierre del map
            }
        </div>
    )



}

export default Tarea