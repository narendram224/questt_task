import React from 'react'

const ButtonComponent = ({btnClass,label,handleClick}) => {
    return (
        <div>
            <button className={`btn ${btnClass}`} onClick={handleClick} >{label}</button>
        </div>
    )
}

export default ButtonComponent
