import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { Provider, useSelector } from 'react-redux';
// import './index.css';
import {store} from './redux/store'
// import {FirebaseAppProvider, AuthCheck} from 'reactfire'
import {Home, NavBar, Profile, Login} from './components'
import 'bootstrap/dist/css/bootstrap.min.css';
import userEvent from '@testing-library/user-event';
import { Books } from './components/Books';


ReactDOM.render(
  <React.StrictMode>
    {/* <FirebaseAppProvider> */}
    <Provider store={store}>
      <Router>
      <Switch>
        
        <Route exact path='/'>
          <NavBar />
          <Home />
        </Route>

        <Route exact path='/books'>
          <NavBar />
          <Books />
        </Route>

        <Route exact path='/profile'>
          <NavBar />
          <Profile />
        </Route>

        <Route exact path='/login'>
          <NavBar />
          <Login />
        </Route>

      </Switch>
      </Router>
    </Provider>
    {/* </FirebaseAppProvider> */}
  </React.StrictMode>,
  document.getElementById('root')
);


