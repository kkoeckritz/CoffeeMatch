import React, { Component } from 'react';
import logo from './logo.png';
import './GetStarted.css';
import { BrowserRouter, Link, Switch } from 'react-router-dom';

class GetStarted extends Component {
  render(props) {
    return (
      <div className="App">
        <header className="App-header">
        <h5 className="getStarted">Not sure where to start?	Let us help you find your SoulMate in three easy steps! No… not your human soul mate. You're on your own with that. We're not miracle workers, we just make great coffee.

            </h5>
            <br/>
        <BrowserRouter>
          <Switch>
            <a href="/home" className="waves-effect waves-light btn-large red darken-3">find your "SoulMate"</a>
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