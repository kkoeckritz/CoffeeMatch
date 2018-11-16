import "./Footer.css";
import React, { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'

class Footer extends Component {
  render() {
    return (
      <footer className="page-footer transparent z-depth-0">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <br />
              <br />
              <br />
              <br />
            </div>
            <div class="col l4 offset-l2 s12">

            </div>
          </div>
        </div>
        <div class="footer-copyright">
          <div class="container">
            © 2018 Copyright SoulMate
          <a class="grey-text text-lighten-4 right" href="https://www.soulworkcoffee.com/">Soul Work Coffee</a>
          </div>
        </div>

      </footer>

    )

  }
}

export default Footer;