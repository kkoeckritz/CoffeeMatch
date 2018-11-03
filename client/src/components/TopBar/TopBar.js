import "./TopBar.css";
import React from "react";

const TopBar = props => 
    <div className="quest_main">
        <header className="navbar-fixed">
            <nav>
                <div className="nav-wrapper red darken-2">
                    
                    <div className="container">
                        <div className="row">
                            <div className="col m12">                            
                                <a href="/" id="nav_name" className="brand-logo left">
                                    <img src="./assets/images/SW_1.png" alt="Soul Work Coffee"/>
                                </a>
                                <span className="big_letter fancy_letter right">SoulMate</span>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </nav>		
        </header>
    </div>
	
export default TopBar;