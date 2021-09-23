export const isLoggedIn = token => {
    const storedToken = getAuthToken()
    return (storedToken||token)?true:false;
}

export const wipeLocalStorage = () => {
    sessionStorage.clear();
}
export const getAuthToken = () => {
    return sessionStorage.getItem('token')
  }
  export const getUserName = () => {
    return sessionStorage.getItem('name')
  }
  export const setToken = token => {
    sessionStorage.setItem('token', token);
  }

  export const setUserName = name => {
    sessionStorage.setItem('name', name);
  }