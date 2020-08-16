import React from 'react';
import ParticlesBg from 'particles-bg';
import { ToastProvider } from 'react-toast-notifications';
import Routing from './routes';
import LanguageButton from './components/Text/LanguageButton';

import './sass/main.scss';

function App() {
  return (
    <ToastProvider>
      <div className="container">
        <LanguageButton />
        <Routing />
        <ParticlesBg color="#2f353e" type="cobweb" bg={true} />
      </div>
    </ToastProvider>
  );
}

export default App;
