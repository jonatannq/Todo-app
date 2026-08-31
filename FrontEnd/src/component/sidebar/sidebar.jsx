import { Link } from 'react-router-dom'

function Side (){
    return(
        <div>
            <Link to="/Completadas" >Tareas Completadas</Link>
            <Link to="/" >Pendientes</Link>
        </div>

    )
}
export default Side