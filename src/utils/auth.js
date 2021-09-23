export const isLoggedIn = token => {
    const storedToken = getAuthToken()
    return storedToken;
}

export const wipeLocalStorage = () => {
    localStorage.clear();
}
export const getAuthToken = () => {
    return localStorage.getItem('isLoggedIn')
  }
  export const getUserName = () => {
    return localStorage.getItem('name')
  }
  export const setToken = bool => {
    localStorage.setItem('isLoggedIn', bool);
  }

  export const setUserName = name => {
    localStorage.setItem('name', name);
  }