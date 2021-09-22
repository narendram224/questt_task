import { combineReducers } from "redux";
import loginReducer from "./login/loginReducer";

 const rootReducers = combineReducers({
  
    login:loginReducer
});
export default rootReducers;