import React from 'react'
import styles from './style.module.css'
const ButtonComponent = ({className,children,handleClick}) => {
    return (
        <div>
            <button className={`${styles.btn} ${className}`} onClick={handleClick} >{children}</button>
        </div>
    )
}

export default ButtonComponent
