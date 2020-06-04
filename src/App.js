import React from 'react';
import { ToastProvider } from 'react-toast-notifications';
import Routing from './routes';

import './sass/main.scss';

function App() {
	return (
		<ToastProvider>
			<div className='container'>
				<Routing />
			</div>
		</ToastProvider>
	);
}

export default App;
