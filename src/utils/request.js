const BASEURL =process.env.BASE_URL||"https://api.staging.reallearning.sbtechzone.com/api/v1"; 
// const BASEURL =process.env.BASE_URL||"https://www.getpostman.com/collections/a04e4200156d440a704f";

export const request = (method="GET",endpoint="",header={},body)=>{
console.log("the base URL is: " , BASEURL);

let myHeaders = new Headers();
    myHeaders.append('Access-Control-Allow-Origin', '*');
    myHeaders.append('Content-Type','application/json')
    myHeaders.append('Accept','application/json')
    myHeaders.append('Accept','*/*')
    myHeaders.append('Connection','keep-alive')
    myHeaders.append('Accept-Encoding','gzip,deflate,br')

  let opts  ={
    headers: {}
  };
  if (body instanceof FormData) {
    opts.body = body
  } else {
    if (header.token) {
        opts.headers['Authorization'] = `Bearer ${header.token}`; 
      
        }
    opts.headers['Access-Control-Allow-Origin'] ="*"
    opts.headers['Content-Type'] = 'application/json'
    opts.headers['Accept'] = 'application/json'
    opts.headers['Accept'] = '*/*'
    opts.headers['Connection'] = 'keep-alive'
    opts.headers['Accept-Encoding']='gzip,deflate,br'



    opts.body = JSON.stringify(body)  // body data type must match "Content-Type" header
    debugger;
  }
       return fetch(`${BASEURL}/${endpoint}`, {
          method: method, // *GET, POST, PUT, DELETE, etc.
          body: opts.body,
          headers:myHeaders

        });
      
}