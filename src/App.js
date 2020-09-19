import React from 'react';
import { ToastProvider } from 'react-toast-notifications';
import './sass/main.scss';
import './assets/fonts/RobotoRegular.woff';
import './assets/fonts/RobotoLight.woff';
const Routing = React.lazy(() => import('./routes'));
const LanguageButton = React.lazy(() => import('./components/common/LanguageButton'));
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
