import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './components/Home/Home';
import GetStarted from './components/GetStarted/GetStarted';
import Decaf from './components/Decaf/Decaf';
import Caffeine from './components/Caffeine/Caffeine';
import DecafStuff from './components/DecafStuff/DecafStuff';
import CaffeineStuff from './components/CaffeineStuff/CaffeineStuff';

const Routes = () =>(
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={GetStarted} />
            <Route exact path='/home' component={Home} />
            <Route 
                exact path='/decaf' 
                render={(props) => <Decaf {...props} />} />
            <Route 
                exact path='/caffeine' 
                render={(props) => <Caffeine {...props} />} />
            <Route 
                exact path='/decaf/selections' 
                render={(props) => <DecafStuff {...props} />} />
            <Route 
                exact path='/caffeine/selections' 
                render={(props) => <CaffeineStuff {...props} />} />
        </Switch>
    </BrowserRouter>
)

export default Routes;