import React from 'react'

const ButtonComponent = ({className,children,handleClick}) => {
    return (
        <div>
            <button className={`btn ${className}`} onClick={handleClick} >{children}</button>
        </div>
    )
}

export default ButtonComponent
