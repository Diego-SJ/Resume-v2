import React from 'react';
import SlideMenu from '../components/layouts/SlideMenu';
import { Route, Switch } from 'react-router-dom';

// Paths
import { HOME, ABOUT, RESUME, PORTFOLIO, CONTACT } from './routes';

// Components
import Home from '../components/pages/Home';
import About from '../components/pages/About';
import Resume from '../components/pages/Resume';
import Contact from '../components/pages/Contact';
import Portfolio from '../components/pages/Portfolio';

export default function Router() {
  return (
    <>
      <SlideMenu />
      <Switch>
        <Route exact path={HOME} component={Home} />
        <Route exact path={ABOUT} component={About} />
        <Route exact path={RESUME} component={Resume} />
        <Route exact path={PORTFOLIO} component={Portfolio} />
        <Route exact path={CONTACT} component={Contact} />
      </Switch>
    </>
  );
}
