import { combineReducers } from "redux";
import  dashboardReducer  from "./Dashboard/dashboard.reducer";
import loginReducer from "./login/loginReducer";

 const rootReducers = combineReducers({
  
    login:loginReducer,
    dashboard:dashboardReducer,
});
export default rootReducers;