import Boton from './boton.jsx'

function Tarea({lista, click}){
    
    return(
    
        <div>
            {
                lista.map((tarea) => {
                    return(
                        <div key={tarea.id}>
                            <input type="radio"  />
                            <span>{tarea.id +  " "}</span>
                            <label>{tarea.nombre}</label>
                            
                            <Boton click={() => click(tarea.id)}>
                                Eliminar
                            </Boton>
                        </div>
            
                    )
                })
            }
        </div>
    
    )



}

export default Tarea