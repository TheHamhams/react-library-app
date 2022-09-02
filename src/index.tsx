import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { Provider, useSelector } from 'react-redux';
// import './index.css';
import {store} from './redux/store'
// import {FirebaseAppProvider, AuthCheck} from 'reactfire'
import {Home, NavBar, Profile} from './components'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Books } from './components/Books';
import { AppState, Auth0Provider } from '@auth0/auth0-react'
import {Auth0ProviderWithHistory} from './auth0-procider-with-history'

let DOMAIN = process.env.REACT_APP_AUTH0_DOMAIN


ReactDOM.render(
  <React.StrictMode>
    <Auth0ProviderWithHistory>
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


      </Switch>
      </Router>
    </Provider>
    </Auth0ProviderWithHistory>
  </React.StrictMode>,
  document.getElementById('root')
);


