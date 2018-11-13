import React, { Component } from 'react';
import logo from './logo.png';
import './GetStarted.css';
import { BrowserRouter, Link, Switch } from 'react-router-dom';

class GetStarted extends Component {
  render(props) {
    return (
      <div className="App">
        <header className="App-header">
        <p className="getStarted">Not sure where to start? 
		<br/>
        Let us help you discover new flavors, or find a favorite.
            </p>
        <BrowserRouter>
          <Switch>
            <a href="/home" className="waves-effect waves-light btn-large red darken-3">Let's Get Started!</a>
         {/* <Link to='/home'> <img src={logo} className="App-logo" alt="logo" />
        </Link> */}
        </Switch>
        </BrowserRouter>
        </header>
      </div>
    );
  }
}

export default GetStarted;