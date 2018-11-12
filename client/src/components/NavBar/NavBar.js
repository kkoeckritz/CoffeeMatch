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
                            <div className="col m12">                            
                                <a href="/" id="nav_name" className="brand-logo left">
                                    <img className="logo" src={small_logo} alt="Soul Work Coffee"/>
                                </a>
                                <span className="big_letter fancy_letter right">SoulMate</span>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </nav>		
        </header>
    </div>
        
  

export default NavBar;