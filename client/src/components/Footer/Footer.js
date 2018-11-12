import "./Footer.css";
import React from "react";
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'

const Footer = props => 

<div>
<a id="menu" className="waves-effect waves-light btn btn-floating" ><i className="material-icons">menu</i></a>
<div className="tap-target" data-target="menu">
  <div className="tap-target-content">
    <h5>About SoulMate</h5>
    <p> Our parents and grandparents drank coffee to caffeinate (not that there's anything wrong with that). We're lucky to explore all the flavors and aromas that expertly grown and roasted coffee has to offer.</p>
  </div>
</div>
</div>

        
  

export default Footer;