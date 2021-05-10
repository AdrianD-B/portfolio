import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

// views
import Home from './views/Home';
import About from './views/About';
import Work from './views/Work';
import Contact from './views/Contact';

// components
import Navbar from './components/Navbar';
import ParticleBackground from './components/paticleBackground';

const Routes = () => (
    <BrowserRouter>
        <Navbar />
        <ParticleBackground />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/About" component={About} />
            <Route path="/Work" component={Work} />
            <Route path="/Contact" component={Contact} />
        </Switch>
    </BrowserRouter>
)

export default Routes;