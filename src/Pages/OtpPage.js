import { useState } from "react"
import { Send } from "react-feather"
import { useLocation } from "react-router"
import ButtonComponent from "../components/atoms/ButtonComponent/ButtonComponent"
import MainLayout from "../components/atoms/Mainlayout/MainLayout"
import OptInput from "../components/atoms/OTPInput/OptInput"
import otpValidator from "../Helper/optValidator"
import useRedux from "../Helper/useRedux"
import useFormValidator from "../Helper/useValidator"
import { validateOtp } from "../redux/login/loginAction"
import './opt.css'
import { useAlert } from 'react-alert'
import { withRouter } from "react-router-dom"

const OtpPage = ({ history }) => {
    const alert = useAlert()
    const [otp, setOtp] = useState("")
    const { state } = useLocation();
    const { handleSubmit, errors, setErrors, setIsSubmitting } = useFormValidator(submitData, { otp }, otpValidator);
    const [_, dispatch] = useRedux('login');
    function submitData() {
        let otpBody = {
            ...state, code: otp,
            device_token: "my device token"
        }
        dispatch(validateOtp(otpBody, history, alert))
        setErrors({})
        setIsSubmitting(false)
        // alert.show('Oh look, an alert!')
    }
    const handleChange = (otp) => {
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
                    {errors && <p className="otp_error">{errors['otp']}</p>}

                    <ButtonComponent label="Get OTP" className="button login__submit" handleClick={handleSubmit}  >
                        <span className="button__text">Get OTP</span>
                        <Send />
                    </ButtonComponent>
                </div>

            </div>

        </MainLayout>
    )
}

export default withRouter(OtpPage)
