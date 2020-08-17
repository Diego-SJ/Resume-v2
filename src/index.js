import React, { Suspense } from 'react';
import { HOME } from './routes/routes';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import Loader from './components/layouts/Loader';

import './utils/i18n';

const WithRouter = () => (
  <Router basename={HOME}>
    <App />
  </Router>
);

ReactDOM.render(
  <Suspense fallback={<Loader />}>
    <WithRouter />
  </Suspense>,
  document.getElementById('root'),
);
