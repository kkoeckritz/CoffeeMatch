import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
          choices: ["Decaf & Pointless", "Caffeinated"],
          info: ["Description of decaf", "Description of Caffeine"],
          question: "First things first: Regular or Decaf?"
        }
      }

    render() {
        return (
            <div className="question1">
                <h5>{ this.state.question }</h5>
         
            <div className="content">
                <div className="grid">
                    <figure className="effect-bubba z-depth-3">
                        <img src="https://tympanus.net/Development/HoverEffectIdeas/img/2.jpg" alt="img02" />
                        <figcaption>
                            <h2>{this.state.choices[0]}</h2>
                            <p>{this.state.info[0]}</p>
                            <a href="/decaf">{this.state.choices[0]}</a>
                        </figcaption>
                    </figure>
                    


                    <figure className="effect-bubba z-depth-3">
                        <img src="https://tympanus.net/Development/HoverEffectIdeas/img/16.jpg" alt="img16" />
                        <figcaption>
                            <h2>{this.state.choices[1]}</h2>
                            <p>{this.state.info[1]}</p>
                            <a href="/caffeine">{this.state.choices[1]}</a>
                        </figcaption>
                    </figure>
                </div>
            </div>

            </div>

            
        )
    }
}

export default Home;