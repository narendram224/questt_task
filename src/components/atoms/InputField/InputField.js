import styles from './style.module.css'
const InputField = ({errorMsg,...props}) => {
    return (
        <div className={styles.form_controller}>
            <input {...props} />
           {errorMsg&&<p>{errorMsg}</p>}
        </div>
    )
}

export default InputField
