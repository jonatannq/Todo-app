import { Outlet } from 'react-router-dom'
import Side from '../component/side/side.jsx'
import styles from './layout.module.scss'

function Layout (){
    return(
        <div className={styles.display}>
            
            <Side />
            <main>
                <Outlet />
            </main>

            

            
        </div>
    )
}

export default Layout