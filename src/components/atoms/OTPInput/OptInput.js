import React from 'react'
import styles from './style.module.css'
import OtpInput from 'react-otp-input';
const OptInput = ({valueArr,handleChange}) => {
    return (
        <div className={styles.userInput}>
             <OtpInput
        value={valueArr}
        onChange={handleChange}
        numInputs={5}
        separator={<span>-</span>}
      />
       
    </div>
    )
}

export default OptInput
