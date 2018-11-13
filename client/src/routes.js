import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './components/Home/Home';
import GetStarted from './components/GetStarted/GetStarted';
import Tags from './components/Tags';
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
                exact path='/caffeine' 
                render={(routeProps) => <Caffeine {...routeProps} {...props} />} />
            <Route 
                exact path='/tags' 
                render={(routeProps) => <Tags {...routeProps} {...props} />} />
        </Switch>
    </BrowserRouter>
)

export default Routes;