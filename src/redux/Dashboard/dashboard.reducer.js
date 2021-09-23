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
            state.loading.subjects=true;
            state.error.subjects="";

            return state;
        case FETCH_SUBJECT_SUCCESS:
            state.loading.subjects=false;
            state.subjects = action.payload;
            state.error.subjects = "";

            return state; 
     case FETCH_SUBJECT_FAILURE:
        state.loading.subjects=false;
        state.error.subjects=action.payload;

        return state; 
    case FETCH_CHAPTER_REQUEST:
        state.oading.chapters=true;
            
            return state;
        case FETCH_CHAPTER_SUCCESS:
            state.loading.chapters=false;
            return state; 
     case FETCH_CHAPTER_FAILURE:
        state.loading.chapters=false;

        return state;  
    default:
        return state;  
    }

})
export default dashboardReducer;