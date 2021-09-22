import { useState,useCallback } from "react"
import { Send } from "react-feather"
import ButtonComponent from "../components/atoms/ButtonComponent/ButtonComponent"
import InputField from "../components/atoms/InputField/InputField"
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
       const  loginBodyStr =`{\n    \"country_code\":\"${Number(country_code)}\",\n    \"mobile\":\"${Number(mobile)}\"\n}`
            
        //  const loginBodyStr =`{\n    \"country_code\":\"${Number(country_code)}\",\n    \"mobile\":\"${Number(mobile)}\"\n}`
        const loginBody ={
            country_code,
            mobile
        }
        // console.log("log",JSON.stringify(loginBodyStr));
        dispatch(loginWithMobile(loginBodyStr));
        setErrors({})
        setIsSubmitting(false)
    }
    const  handleChange = useCallback((e)=>{
        setErrors({})
        setIsSubmitting(false)
        setMobile(e.target.value)
    },[])
    return (
        // <div>
       
        //     <InputField value={mobile} onChange={handleChange} placeholder="Enter Mobile no" errorMsg={errors['mobile']}  />
        //     <ButtonComponent label="Get OTP" handleClick={handleSubmit}  />
        // </div>
        <div className="container">
	<div className="screen">
		<div className="screen__content">
			<form className="login">
				{/* <div className="login__field">
					<i className="login__icon fas fa-user"></i>
					<input type="text" className="login__input" placeholder="User name / Email" />
				</div> */}
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
					{/* <i className="login__icon fas fa-lock"></i>
					<input type="password" className="login__input" placeholder="Password" /> */}
				</div>
                <div className="login__field">
                     <InputField value={mobile} className="login__input" onChange={handleChange} placeholder="Enter Mobile no" errorMsg={errors['mobile']}  />
					{/* <input type="text"  placeholder="Enter Mobile no" /> */}
				</div>
                </div>
                <ButtonComponent label="Get OTP" className="button login__submit" handleClick={handleSubmit}  >
                <span className="button__text">Get OTP</span>
                    <Send  />
                </ButtonComponent>
							
			</form>
			
		</div>
		<div className="screen__background">
			<span className="screen__background__shape screen__background__shape4"></span>
			<span className="screen__background__shape screen__background__shape3"></span>		
			<span className="screen__background__shape screen__background__shape2"></span>
			<span className="screen__background__shape screen__background__shape1"></span>
		</div>		
	</div>
</div>
    )
}

export default LoginPage
