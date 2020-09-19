import React from 'react';
import LanguageButton from './components/common/LanguageButton';
import { ToastProvider } from 'react-toast-notifications';
import './sass/main.scss';
const Routing = React.lazy(() => import('./routes'));
const ParticlesBg = React.lazy(() => import('particles-bg'));

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
