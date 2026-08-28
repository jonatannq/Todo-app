import Boton from './boton.jsx'

function Tarea({id, name}){
    const borrar = () => {
      alert("Borrar tarea: "+ name + " con id " + id)
    }
    return(
    <>
        <div>
            <input type="radio"  />
            <label>{name}</label>
            <Boton click={borrar}>
                Eliminar
            </Boton>
        </div>
    </>
    )
}

export default Tarea