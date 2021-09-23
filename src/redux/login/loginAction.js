import { FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILURE, FETCH_LOGIN_REQUEST, FETCH_LOGIN_SUCCESS, FETCH_LOGIN_FAILURE, FETCH_LOGOUT_REQUEST, FETCH_LOGOUT_SUCCESS, FETCH_LOGOUT_FAILURE } from "./loginType"
import { loginWithApi, setToken, setUserName, verfiyOtpWithApi, wipeLocalStorage } from "../../utils"
import {  positions} from 'react-alert'
import { logoutWithApi } from "../../utils/api"
 const loginRequest = ()=>{
    return {
        type:FETCH_USER_REQUEST
    }
}
 const loginSuccess = user=>{
        return {
            type:FETCH_USER_SUCCESS,
            payload:user
        }
}   

 const loginFailure = error=>{
    return {
        type:FETCH_USER_FAILURE,
        payload:error
    }
}

export const loginWithMobile = (body,history)=>{
    return (dispatch)=>{
            dispatch({type:FETCH_LOGIN_REQUEST});
            loginWithApi(body)
            .then( response=>{
                    const user = response;
                    dispatch({type:FETCH_LOGIN_SUCCESS})
                    history.push({pathname: '/otp',
                    state: body});
            })
            .catch((err)=>{
                const error = err.message;
                dispatch({type:FETCH_LOGIN_FAILURE})
            })
    }
}

export const logoutViaApi = (body,history)=>{
    return (dispatch)=>{
            dispatch({type:FETCH_LOGOUT_REQUEST});
            wipeLocalStorage()
            logoutWithApi(body)
            .then( response=>{
                    const user = response;
                    dispatch({type:FETCH_LOGOUT_SUCCESS})
                    history.push({pathname: '/otp',
                    state: body});
            })
            .catch((err)=>{
                const error = err.message;
                dispatch({type:FETCH_LOGOUT_FAILURE})
            })
    }
}

export const validateOtp = (body,history,alert)=>{
    return (dispatch)=>{
            dispatch(loginRequest);
            verfiyOtpWithApi(body)
            .then( response=>{
                console.log("res",response)
                if(response.errors){
                    alert.error(`Error:${response.errors[0]&&response.errors[0]['detail']}`, {
                        timeout: 4000,
                        offset: '100px',
                        position:positions.TOP_CENTER}
                    )
                }else{
                    setToken(true);
                    const user = response['data'];
                    setUserName(user['name'])
                    dispatch(loginSuccess(user))
                    history.push('/dashboard');
                }
                    
            })
            .catch((err)=>{
                const error = err.message;
                dispatch(loginFailure((error)))
                alert.error('Some error', {
                    timeout: 2000,
                    position:positions.TOP_CENTER}
                )

            })
    }
}