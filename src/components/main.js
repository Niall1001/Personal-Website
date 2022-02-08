import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingpage';
import Pasttime from './pasttime';
import Projects from './projects';
import Resume from './resume';

const Main = () => (
  <Switch>
    <Route exact path='/' component={LandingPage} />
    <Route path='/projects' component={Projects} />
    <Route path='/resume' component={Resume} />
    <Route path='/pasttime' component={Pasttime} />
  </Switch>
);

export default Main;
