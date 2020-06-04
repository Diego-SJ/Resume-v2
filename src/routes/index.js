import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Paths
import { HOME, ABOUT, RESUME, PORTFOLIO, CONTACT } from './routes';

// Components
import Home from '../pages/Home';
import About from '../pages/About';
import Resume from '../pages/Resume';
import Contact from '../pages/Contact';
import Portfolio from '../pages/Portfolio';

export default function index() {
	return (
		<Router>
			<>
				<Switch>
					<Route exact path={HOME} component={Home} />
					<Route exact path={ABOUT} component={About} />
					<Route exact path={RESUME} component={Resume} />
					<Route exact path={PORTFOLIO} component={Portfolio} />
					<Route exact path={CONTACT} component={Contact} />
				</Switch>
			</>
		</Router>
	);
}
