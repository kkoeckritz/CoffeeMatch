import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './components/Home/Home';
import GetStarted from './components/GetStarted/GetStarted';
import Decaf from './components/Decaf/Decaf';
import Caffeine from './components/Caffeine/Caffeine';
import DecafStuff from './components/DecafStuff/DecafStuff';
import CaffeineStuff from './components/CaffeineStuff/CaffeineStuff';

const Routes = (props) =>(
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={GetStarted} />
            <Route exact path='/home' 
                render={(routeProps) => <Home {...routeProps} {...props} />} />
            <Route 
                exact path='/decaf' 
                render={(routeProps) => <Decaf {...routeProps} {...props} />} />
            <Route 
                exact path='/caffeine' 
                render={(routeProps) => <Caffeine {...routeProps} {...props} />} />
            <Route 
                exact path='/decaf/selections' 
                render={(routeProps) => <DecafStuff {...routeProps} {...props} />} />
            <Route 
                exact path='/caffeine/selections' 
                render={(routeProps) => <CaffeineStuff {...routeProps} {...props} />} />
        </Switch>
    </BrowserRouter>
)

export default Routes;