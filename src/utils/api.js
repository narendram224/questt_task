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
  return request("POST",`teacher/signup`,{},body).then((res)=>res.json()).then(result=>result)
         
  }
  export const logoutWithApi =(body)=>{
    return request("POST",`logout`,{token:getAuthToken()},body).then((res)=>res.json()).then(result=>result)
           
    }
  export const verfiyOtpWithApi =(body)=>{
    return request("POST",`verify-otp`,{},body).then((res)=>res.json()).then(result=>result)
       
    }
export const fetchSubjectWithApi =(query,body)=>{
      return request("GET",`teacher/subject?${query}`,{token:getAuthToken()},body).then((res)=>res.json()).then(result=>result)
}
export const fetchChapterWithApi =(query)=>{
        return request("GET",`teacher/chapter?${query}`,{token:getAuthToken()}).then((res)=>res.json()).then(result=>result)
    }