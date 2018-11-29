import "./NavBar.css";
import React, { Component } from 'react';
import { BrowserRouter, Link, Switch, withRouter } from 'react-router-dom';
import small_logo from "./SW_1.png";

class NavBar extends Component {
    
    // logout
    logOut(e){
        e.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push('/')
    }

    render() {
        const loginRegLink = (
         
            <div className="row center">
                <div className="col s6">
                    <Link to="/login" className="login btn red darken-4">LOGIN</Link>
                </div>
                <div className="col s6">
                    <Link to="/register" className="register btn red darken-4">SIGNUP</Link>
                </div>
            </div>
              
               
              
        )

        const userLink = (
            <div className="row center">
            <div className="col s6">
                <Link to="/profile" className="login btn red darken-4">USER</Link>
            </div>
            <div className="col s6">
                <a href="/" onClick={this.logOut.bind(this)} className="register btn red darken-4">LOGOUT</a>
            </div>
            </div>
        )
    
        return (
            <div className="quest_main">
                    <header className="navbar-fixed">
                        <nav>
                            <div className="nav-wrapper red darken-4">
                                
                                <div className="container">
                                    <div className="row">
                                        <div className="col s4 left">                            
                                            <a href="https://www.soulworkcoffee.com/" 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            id="nav_name" 
                                            className="brand-logo tooltipped" 
                                            data-position="bottom" 
                                            data-tooltip="Home">
                                            <img className="logo" src={small_logo} alt="Soul Work Coffee"/>
                                            </a>
                                            </div>
                                        <div className="col s4 center">
                                            {localStorage.usertoken ? userLink : loginRegLink}
                                        </div>
                                        <div className="col s4 right">
                                            <a href="/" className="big_letter fancy_letter right">SoulMate</a>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </nav>		
                    </header>
                </div>
        )
 
}
    
}

export default withRouter(NavBar);
