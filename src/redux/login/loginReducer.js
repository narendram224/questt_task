import { FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILURE } from "./loginType";

const initialState ={
    loading:false,
    users:[],
    error:''
}

const loginReducer = (state=initialState,action)=>{
    switch (action.type) {
        case FETCH_USER_REQUEST:
            return{
                ...state,
                loading:true
            }
        case FETCH_USER_SUCCESS:
            return{
                ...state,
                loading:false,
                user:action.payload,
                error:''
            }
        case FETCH_USER_FAILURE:
            return{
                ...state,
                loading:false,
                error:action.payload,
                user:[]
            }
        default:
            return state;
    }
}

export default loginReducer;