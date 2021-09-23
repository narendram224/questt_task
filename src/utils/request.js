// const BASEURL =process.env.BASE_URL||"https://api.staging.reallearning.sbtechzone.com/api/v1"; 
const BASEURL =process.env.BASE_URL||"https://api.reallearning.sbtechzone.com/api/v1";

export const request = (method="GET",endpoint="",header={},body)=>{
console.log("the base URL is: " , BASEURL);

let myHeaders = new Headers();
    myHeaders.append('Access-Control-Allow-Origin', '*');
    myHeaders.append('Content-Type','application/json')
    myHeaders.append('Accept','application/json')
    myHeaders.append('Accept','*/*')
    myHeaders.append('Connection','keep-alive')
    myHeaders.append('Accept-Encoding','gzip,deflate,br')
    myHeaders.append('Cookie','cookieName="cookieValue"; Secure; HttpOnly')

       return fetch(`${BASEURL}/${endpoint}`, {
          method: method, // *GET, POST, PUT, DELETE, etc.
          body: JSON.stringify(body),
          headers:myHeaders

        });
      
}