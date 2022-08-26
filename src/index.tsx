import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { Provider } from 'react-redux';
import './index.css';
import {store} from './redux/store'
// import {FirebaseAppProvider, AuthCheck} from 'reactfire'
import {Home} from './components'

ReactDOM.render(
  <React.StrictMode>
    {/* <FirebaseAppProvider> */}
    <Provider store={store}>
      <Router>
      <Switch>
        
        <Route exact path='/'>
          <Home />
        </Route>


      </Switch>
      </Router>
    </Provider>
    {/* </FirebaseAppProvider> */}
  </React.StrictMode>,
  document.getElementById('root')
);


