import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './components/Home/Home';
import GetStarted from './components/GetStarted/GetStarted';
import Tags from './components/Tags';
import Caffeine from './components/Caffeine/Caffeine';
import Results from './components/Results';
// import Login from './components/Login';
// import Register from './components/Register';
// import Profile from './components/Profile';

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
            <Route 
                exact path='/results' 
                render={(routeProps) => <Results {...routeProps} {...props} />} />
            {/* <Route 
                exact path='/login' component={Login} />
            <Route 
                exact path='/register' component={Register} />
            <Route 
                exact path='/profile' component={Profile} /> */}
            <Route exact path="/admin" 
            render={() => {window.location.href="admin.html"}} />    
        </Switch>
    </BrowserRouter>
)

export default Routes;