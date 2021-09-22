import { Loader } from 'react-feather'
import styles from './style.module.css'
const Spin = () => {
    return (
        <div className={styles.spinner_wrapper} >

            <Loader  size={36} className="App-logo" />
        </div>
    )
}

export default Spin
