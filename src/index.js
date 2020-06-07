import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Loader from './layouts/Loader';

import './utils/i18n';

ReactDOM.render(
	<Suspense fallback={<Loader />}>
		<App />
	</Suspense>,
	document.getElementById('root'),
);
