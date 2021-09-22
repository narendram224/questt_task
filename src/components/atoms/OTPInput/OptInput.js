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
        {/* <input type="text" id="sec" maxLength="1" onkeyup="clickEvent(this,'third')" />
        <input type="text" id="third" maxLength="1" onkeyup="clickEvent(this,'fourth')" />
        <input type="text" id="fourth" maxLength="1" onkeyup="clickEvent(this,'fifth')" />
        <input type="text" id="fifth" maxLength="1" /> */}
    </div>
    )
}

export default OptInput
