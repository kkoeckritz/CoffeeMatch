import React, { Component } from "react";
import "./Decaf.css";

class Decaf extends Component {
    render() {
        return (
            <div className="decaf">
                <h4>{this.props.text.question2}</h4>

                <figure className="effect-bubba z-depth-3">
                    <img src="./assets/images/coffee-in-sun.jpg" alt="" />
                    <figcaption
                        onClick={() => this.props.history.goBack()}
                    >
                        <h2>Go Back</h2>
                        <p><i class="large material-icons">arrow_back</i></p>
                    </figcaption>
                </figure>
            </div>

        )
    }
}

export default Decaf;