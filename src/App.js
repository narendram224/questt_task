import './App.css';
import { Provider } from 'react-redux'
import { createBrowserHistory } from 'history'
import { BrowserRouter as Router, Switch,Route } from "react-router-dom";
import PrivateRoute from './PrivateRoute';
import Spin from './components/atoms/Spin';
import { lazy, Suspense } from 'react';
import store from './redux/store';

const LoginPage = lazy(()=>import('./Pages/LoginPage'))
const DashboardPage = lazy(() => import('./Pages/Dashboard'))
const OtpPage = lazy(() => import('./Pages/OtpPage'))


function App() {
  // const history = createBrowserHistory()  
  return (
    <Provider store={store}>
    <Router  inititalRoute={'/'} >
      <Suspense fallback={<Spin  />}>
        <Switch>
          <Route
            exact
            path="/"
            component={LoginPage}
          />
          <Route
            exact
            path="/otp"
            component={OtpPage}
          />
          <PrivateRoute
            exact
            path="/dashboard"
            component={DashboardPage}
          />
          </Switch>
          </Suspense>
          </Router>
          </Provider>
  );
}

export default App;
