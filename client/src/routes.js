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
            <Route exact path='/decaf' component={Decaf} />
            <Route exact path='/caffeine' component={Caffeine} />
            <Route exact path='/decaf/selections' component={DecafStuff} />
            <Route exact path='/caffeine/selections' component={CaffeineStuff} />
        </Switch>
    </BrowserRouter>
)

export default Routes;