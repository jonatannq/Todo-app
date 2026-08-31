import { Link } from 'react-router-dom'
import styles from './side.module.scss'

function Side (){
    return(
        <div className={styles.sidebar}>
            <Link to="/Completadas" >Tareas Completadas</Link>
            <Link to="/" >Bandeja</Link>
        </div>

    )
}
export default Side