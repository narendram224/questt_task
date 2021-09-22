import { useState } from "react"
import { Send } from "react-feather"
import ButtonComponent from "../components/atoms/ButtonComponent/ButtonComponent"
import MainLayout from "../components/atoms/Mainlayout/MainLayout"
import OptInput from "../components/atoms/OTPInput/OptInput"
import Spin from "../components/atoms/Spin"
import otpValidator from "../Helper/optValidator"
import useRedux from "../Helper/useRedux"
import useFormValidator from "../Helper/useValidator"
import './opt.css'

 
const OtpPage = () => {
    const [otp, setOtp] = useState("")
    const   {handleSubmit,errors,setErrors,setIsSubmitting} = useFormValidator(submitData,{otp}, otpValidator);
    const [{ user, islogin,loader,error }, dispatch] = useRedux('login');
    function submitData(){
        console.log("log submit data");
        console.log("errors",errors['otp']);
        dispatch()
        setErrors({})
        setIsSubmitting(false)
    }
    const handleChange =(otp)=>{
        console.log("otp",otp);
        setOtp(otp)
        setErrors({})
        setIsSubmitting(false)
    }
    return (
        <MainLayout>
            <div className="otp_container">
                <div className="otp_content">
                <h1 className="otp_title">Enter you OTP here</h1>
                 <OptInput valueArr={otp} handleChange={handleChange} />
                {errors&&<p className="otp_error">{errors['otp']}</p>}

                     <ButtonComponent label="Get OTP" className="button login__submit" handleClick={handleSubmit}  >
                <span className="button__text">Get OTP</span>
                    <Send  />
                </ButtonComponent>
                </div>
           
            </div>
      
        </MainLayout>
    )
}

export default OtpPage
