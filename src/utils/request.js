// const BASEURL =process.env.BASE_URL||"https://api.staging.reallearning.sbtechzone.com/api/v1"; 
const BASEURL =process.env.BASE_URL||"https://api.reallearning.sbtechzone.com/api/v1";

export const request = (method="GET",endpoint="",header={},body)=>{

let reqHeader = new Headers();
    if (header.token) {
      reqHeader.append('Authorization', `Bearer ${header.token}`)
    }
    reqHeader.append('Access-Control-Allow-Origin', '*');
    reqHeader.append('Content-Type','application/json')
    reqHeader.append('Accept','application/json')
    reqHeader.append('Accept','*/*')
    reqHeader.append('Connection','keep-alive')
    reqHeader.append('Accept-Encoding','gzip,deflate,br')
    reqHeader.append('Cookie','cookieName="cookieValue"; Secure; HttpOnly')

       return fetch(`${BASEURL}/${endpoint}`, {
          method: method, // *GET, POST, PUT, DELETE, etc.
          body: JSON.stringify(body),
          headers:reqHeader

        });
      
}