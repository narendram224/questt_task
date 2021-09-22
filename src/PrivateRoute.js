import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { isLoggedIn } from './utils/auth';

function PrivateRoute ({component: Component, exact , ...rest}) {
  
  return (
    <Route
      {...rest}
      exact
      render={(props) => isLoggedIn()
        ? <Component {...props} {...rest} />
        : <Redirect
            to={{pathname: '/', state: {from: props.location}}}
          />}
    />
  )
}

export default PrivateRoute