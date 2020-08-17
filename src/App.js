import React from 'react';
import LanguageButton from './components/common/LanguageButton';
import ParticlesBg from 'particles-bg';
import { ToastProvider } from 'react-toast-notifications';
import Routing from './routes';

import './sass/main.scss';

function App() {
  return (
    <ToastProvider>
      <section className="container">
        <LanguageButton />
        <Routing />
        <ParticlesBg color="#2f353e" type="cobweb" bg={true} />
      </section>
    </ToastProvider>
  );
}

export default App;
