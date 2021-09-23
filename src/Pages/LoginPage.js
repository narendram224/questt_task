import { useState, useCallback } from "react"
import { Send } from "react-feather"
import ButtonComponent from "../components/atoms/ButtonComponent/ButtonComponent"
import InputField from "../components/atoms/InputField/InputField"
import MainLayout from "../components/atoms/Mainlayout/MainLayout"
import loginValidator from "../Helper/loginValidator"
import useRedux from "../Helper/useRedux"
import useFormValidator from "../Helper/useValidator"
import { loginWithMobile } from "../redux/login/loginAction"
import './Login.css'
import { withRouter } from 'react-router-dom';
import { useAlert } from 'react-alert'
const staticFilterData = [{ value: "91", label: "91" }]
const LoginPage = ({ history }) => {
    const alert = useAlert()
    const [mobile, setMobile] = useState("")
    const { handleSubmit, errors, setErrors, setIsSubmitting } = useFormValidator(submitData, { mobile }, loginValidator);
    const [_, dispatch] = useRedux('login');
    function submitData() {
        const loginBody = {
            country_code: "91",
            mobile: "917398608888",
            tnc: 1
        }

        dispatch(loginWithMobile(loginBody, history, alert));
        setErrors({})
        setIsSubmitting(false)
    }
    const handleChange = useCallback((e) => {
        e.preventDefault();
        setErrors({})
        setIsSubmitting(false)
        setMobile(e.target.value)
    }, [])
    return (
        <MainLayout>


            <div className="screen__content">
                <form className="login">

                    <div className="login_wrapper">


                        <div className="login__field">
                            <div className="select-dropdown">
                                <select>
                                    {staticFilterData.map((ele) => {
                                        return (
                                            <option value={ele.value} key={ele.value}>{ele.label}</option>
                                        )
                                    })}
                                </select>
                            </div>
                        </div>
                        <div className="login__field">
                            <InputField value={mobile} type="text" className="login__input" onChange={handleChange} placeholder="Enter Mobile no" errorMsg={errors['mobile']} />
                        </div>
                    </div>
                    <ButtonComponent label="Get OTP" className="button login__submit" handleClick={handleSubmit}  >
                        <span className="button__text">Get OTP</span>
                        <Send />
                    </ButtonComponent>

                </form>

            </div>
        </MainLayout>

    )
}

export default withRouter(LoginPage)
