import React from 'react';
import { ToastProvider } from 'react-toast-notifications';
import Routing from './routes';
import LanguageButton from './components/Text/LanguageButton';

import './sass/main.scss';

function App() {
	return (
		<ToastProvider>
			<div className='container'>
				<LanguageButton />
				<Routing />
			</div>
		</ToastProvider>
	);
}

export default App;
