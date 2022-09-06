import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { Provider } from 'react-redux';
import './index.css';
import {store} from './redux/store'

import {Home, NavBar, Profile} from './components'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Books } from './components/Books';
import {Auth0ProviderWithHistory} from './auth0-procider-with-history'


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


