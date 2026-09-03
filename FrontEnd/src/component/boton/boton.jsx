import styles from './boton.module.scss'

function Boton({children, variant = "primary", click, disabled = false}){
    return(
        <button disabled={disabled} className={`${styles.boton} ${styles[variant]}`} onClick={click}> {children} </button>
    )
}

export default Boton