import { useState } from 'react'
import Boton from '../boton/boton.jsx'
import styles from './tarea.module.scss'

function Tarea({lista, del, save, 
    editando, setEditando,
    estado }){//Cambiar esas props

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
                                    <input onClick={() => estado(tarea.id)} type="radio"  />
                                    <label >{tarea.nombre}</label>
                                </div>

                                <div className={styles.tools}>
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