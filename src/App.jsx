import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './components/index';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route to="/" component={App} />
        <App />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
