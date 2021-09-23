import { fetchChapterWithApi, fetchSubjectWithApi } from "../../utils/api";
import {  positions} from 'react-alert'
import { FETCH_CHAPTER_FAILURE, FETCH_SUBJECT_FAILURE, FETCH_SUBJECT_REQUEST, FETCH_SUBJECT_SUCCESS } from "./dashboard.type";



export const fetchSubject = (query,history)=>{

    return (dispatch)=>{
            dispatch({type:FETCH_SUBJECT_REQUEST});
            fetchSubjectWithApi(query)
            .then( async(response)=>{

                    if(response.errors){
                        alert.error(`Error:${response.errors[0]&&response.errors[0]['detail']}`, {
                            timeout: 4000,
                            offset: '100px',
                            position:positions.TOP_CENTER}
                        )
                    }else{
                        const data =[];
                        const subjects = response['data'];
                        for (let i = 0; i < subjects.length; i++) {
                            const element = subjects[i];
                            try {
                                const actualData = await fetchChapterWithApi(`subjects=${element['id']}`);
                            if (actualData.status==="Success") {
                                 subjects[i].chapter=actualData['data'];
                            }
                            } catch (error) {
                                dispatch({type:FETCH_SUBJECT_SUCCESS,payload:error})
                            }
                            
                        }
                        dispatch({type:FETCH_SUBJECT_SUCCESS,payload:subjects})
                    }
                  
            })
            .catch((err)=>{
                const error = err.message;
                dispatch({type:FETCH_SUBJECT_FAILURE,payload:error})
            })
    }
}
