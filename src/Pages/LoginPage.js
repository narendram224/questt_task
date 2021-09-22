import { useState,useCallback } from "react"
import { Send } from "react-feather"
import ButtonComponent from "../components/atoms/ButtonComponent/ButtonComponent"
import InputField from "../components/atoms/InputField/InputField"
import MainLayout from "../components/atoms/Mainlayout/MainLayout"
import loginValidator from "../Helper/loginValidator"
import useRedux from "../Helper/useRedux"
import useFormValidator from "../Helper/useValidator"
import { loginWithMobile } from "../redux/login/loginAction"
import './Login.css'
const staticFilterData=[{value:"91",label:"91"}]
const LoginPage = () => {
    const [mobile, setMobile] = useState("")
    const [country_code, setCountry_code] = useState(staticFilterData[0]['value'])
    const   {handleSubmit,errors,setErrors,setIsSubmitting} = useFormValidator(submitData,{mobile}, loginValidator);
    const [{ user, islogin,loader,error }, dispatch] = useRedux('login');
     function submitData (){
        console.log("submit Called",mobile);
        // const  loginBodyStr =`{\n    \"country_code\":\"${Number(country_code)}\",\n    \"mobile\":\"${Number(mobile)}\"\n}`
            
        //  const loginBodyStr =`{\n    \"country_code\":\"${Number(country_code)}\",\n    \"mobile\":\"${Number(mobile)}\"\n}`
        const loginBody ={
            country_code:"91",
            mobile:"7398608221"
        }
       
        // console.log("log",JSON.stringify(loginBodyStr));
        dispatch(loginWithMobile(loginBody));
        setErrors({})
        setIsSubmitting(false)
    }
    const  handleChange = useCallback((e)=>{
        setErrors({})
        setIsSubmitting(false)
        setMobile(e.target.value)
    },[])
    return (
<MainLayout>


		<div className="screen__content">
			<form className="login">
				
                <div className="login_wrapper">

              
				<div className="login__field">
                <div class="select-dropdown">
                 <select>
             {staticFilterData.map((ele)=>{
                    return (
                        <option value={ele.value} key={ele.value}>{ele.label}</option>
                    )
                })}
            </select>
            </div>
				</div>
                <div className="login__field">
                     <InputField value={mobile} type="text" className="login__input" onChange={handleChange} placeholder="Enter Mobile no" errorMsg={errors['mobile']}  />
				</div>
                </div>
                <ButtonComponent label="Get OTP" className="button login__submit" handleClick={handleSubmit}  >
                <span className="button__text">Get OTP</span>
                    <Send  />
                </ButtonComponent>
							
			</form>
			
		</div>
        </MainLayout>

    )
}

export default LoginPage
