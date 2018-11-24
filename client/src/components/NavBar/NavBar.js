import "./NavBar.css";
import React from "react";
import small_logo from "./SW_1.png";

const NavBar = props => 

    <div className="quest_main">
        <header className="navbar-fixed">
            <nav>
                <div className="nav-wrapper red darken-4">
                    
                    <div className="container">
                        <div className="row">
                            <div className="col s6 left">                            
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
                                <div className="col s6">
                                <a href="/" className="big_letter fancy_letter right">SoulMate</a>
                                </div>
                           
                        </div>
                    </div>
                    
                </div>
            </nav>		
        </header>
    </div>
        
  

export default NavBar;