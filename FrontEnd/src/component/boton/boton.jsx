import styles from './boton.module.scss'

function Boton({children, variant = "primary", click}){
    return(
        <button className={`${styles.boton} ${styles[variant]}`} onClick={click}> {children} </button>
    )
}

export default Boton