export const isLoggedIn = token => {
    const storedToken = getAuthToken()
    return (token || storedToken ? true : false)
}

export const wipeLocalStorage = () => {
    localStorage.removeItem('Authorization');
}
export const getAuthToken = () => {
    return localStorage.getItem('Authorization')
  }
  export const setToken = token => {
    localStorage.setItem('Authorization', token);
  }