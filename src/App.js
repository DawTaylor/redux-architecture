import React, { Component } from 'react';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { Route, Link, Switch } from 'react-router-dom';
import { ConnectedRouter as Router } from 'connected-react-router';

import configureStore from './store';

import Logs from './containers/Logs';
import Login from './containers/Login';

const history = createHistory();
const store = configureStore({}, history);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <div>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Switch>
              <Route exact path="/" component={Logs} />
              <Route path="/login" component={Login} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
