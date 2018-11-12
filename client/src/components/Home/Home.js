import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
    // state : {

    // }

    render() {
        return (
            <div className="question1">
                <p>First things first: Regular or Decaf?</p>
         
            <div className="content">
                <div className="grid">
                    <figure className="effect-bubba">
                        <img src="https://tympanus.net/Development/HoverEffectIdeas/img/2.jpg" alt="img02" />
                        <figcaption>
                            <h2>Decaf & Pointless</h2>
                            <p>........</p>
                            <a href="/decaf">Decaf</a>
                        </figcaption>
                    </figure>
                    <figure className="effect-bubba">
                        <img src="https://tympanus.net/Development/HoverEffectIdeas/img/16.jpg" alt="img16" />
                        <figcaption>
                            <h2>Caffeinated</h2>
                            <p>......</p>
                            <a href="/caffeine">Caffeine</a>
                        </figcaption>
                    </figure>
                </div>
            </div>
            </div>
        )
    }
}

export default Home;