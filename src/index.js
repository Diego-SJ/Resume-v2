import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { HOME } from './routes/routes';
import App from './App';
import Loader from './components/layouts/Loader';
import createStore from './redux/store';
import './utils/i18n';

const store = createStore();

const WithRouter = () => (
  <Router basename={HOME}>
    <App />
  </Router>
);

const WithRedux = () => (
  <Provider store={store}>
    <WithRouter />
  </Provider>
);

ReactDOM.render(
  <Suspense fallback={<Loader />}>
    <WithRedux />
  </Suspense>,
  document.getElementById('root'),
);
