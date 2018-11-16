import React, { Component } from 'react';
import logo from './logo.png';
import './GetStarted.css';
import { BrowserRouter, Link, Switch } from 'react-router-dom';

class GetStarted extends Component {
  render(props) {
    return (
      <div className="App">
        <header className="App-header container-fluid">
        <h4 className="getStarted">Not sure where to start?
        Let us help you discover new flavors, or find a favorite.
            </h4>
            <br/>
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