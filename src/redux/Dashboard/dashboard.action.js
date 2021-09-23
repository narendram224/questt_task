import { fetchSubjectWithApi } from "../../utils/api";
import {  positions} from 'react-alert'
import { FETCH_SUBJECT_FAILURE, FETCH_SUBJECT_REQUEST, FETCH_SUBJECT_SUCCESS } from "./dashboard.type";



export const fetchSubject = (query,history)=>{

    return (dispatch)=>{
            dispatch({type:FETCH_SUBJECT_REQUEST});
            fetchSubjectWithApi(query)
            .then( response=>{
                   console.log("response: " , response);

                    if(response.errors){
                        alert.error(`Error:${response.errors[0]&&response.errors[0]['detail']}`, {
                            timeout: 4000,
                            offset: '100px',
                            position:positions.TOP_CENTER}
                        )
                    }else{
                        const subjects = response['data'];
                        dispatch({type:FETCH_SUBJECT_SUCCESS,payload:subjects})
                        // history.push('/dashboard');
                    }
                    // history.push({pathname: '/otp',
                    // state: body});
            })
            .catch((err)=>{
                const error = err.message;
                dispatch({type:FETCH_SUBJECT_FAILURE})
            })
    }
}
