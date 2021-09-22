import { FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILURE } from "./loginType"
import { loginWithApi } from "../../utils"

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

export const loginWithMobile = (mobile)=>{
    return (dispatch)=>{
            dispatch(loginRequest);
            loginWithApi(mobile)
            .then( response=>{
                    const user = response;
                    dispatch(loginSuccess(user))
            })
            .catch((err)=>{
                const error = err.message;
                dispatch(loginFailure((error)))
            })
    }
}