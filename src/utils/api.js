import { getAuthToken } from "./auth"
import { request } from "./request"

 // teacher  dashboard api here
 export const getTeacherDashbaord =(query,page=1)=>{
    const headerObj ={
        token:getAuthToken()
    }
 return request("GET",`v1/techer_dahs`,headerObj).then((res)=>res.json()).then(result=>result)
   
    
  }
//   login Api call here
  export const loginWithApi =(body)=>{
  return request("POST",`login`,{},body).then((res)=>res.json()).then(result=>result)
         
  }