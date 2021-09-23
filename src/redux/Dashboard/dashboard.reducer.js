import produce from "immer";
import { FETCH_CHAPTER_FAILURE, FETCH_CHAPTER_REQUEST, FETCH_CHAPTER_SUCCESS, FETCH_SUBJECT_FAILURE, FETCH_SUBJECT_REQUEST, FETCH_SUBJECT_SUCCESS } from "./dashboard.type";

const initialState={
    loading:{subjects:false,chapters:false},
    error:{subjects:false,chapters:false},
    subjects:[],
    chapters:[]

}

 const dashboardReducer =produce((state=initialState,action)=>{

    switch (action.type) {
        case FETCH_SUBJECT_REQUEST:

            return state;
        case FETCH_SUBJECT_SUCCESS:

            return state; 
     case FETCH_SUBJECT_FAILURE:

        return state; 
    case FETCH_CHAPTER_REQUEST:
            
            return state;
        case FETCH_CHAPTER_SUCCESS:

            return state; 
     case FETCH_CHAPTER_FAILURE:

        return state;  
    default:
        return state;  
    }

})
export default dashboardReducer;