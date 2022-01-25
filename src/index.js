import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import App from './components/app';
import taskStore from './store';

ReactDOM.render(
  <Provider store={taskStore}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
