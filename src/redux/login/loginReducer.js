import produce from "immer";
import { FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILURE } from "./loginType";

const initialState ={
    loading:false,
    user:{},
    error:''
}

const loginReducer = produce((state=initialState,action)=>{
    switch (action.type) {
        case FETCH_USER_REQUEST:
            state.loading=true;
            return state;
        case FETCH_USER_SUCCESS:
            state.loading=false;
            state.user = action.payload;
            return state;
        case FETCH_USER_FAILURE:
            state.loading=false;
            state.user = {};
            state.error = action.payload;
            return state;
            
        default:
            return state;
    }
})

export default loginReducer;