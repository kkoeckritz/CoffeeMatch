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
                            <figcaption
                                onClick={() => {
                                    this.props.setCaffeine("decaf");
                                    this.props.history.push('/caffeine');
                                }}
                            >
                                <h2>{this.state.choices[0]}</h2>
                                <p>{this.state.info[0]}</p>
                            </figcaption>
                        </figure>
                        
                        <figure className="effect-bubba z-depth-3">
                            <img src="https://tympanus.net/Development/HoverEffectIdeas/img/16.jpg" alt="img16" />
                            <figcaption
                                onClick={() => {
                                    this.props.setCaffeine("caffeine");
                                    this.props.history.push('/caffeine');
                                }}
                            >
                                <h2>{this.state.choices[1]}</h2>
                                <p>{this.state.info[1]}</p>
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </div>            
        )
    }
}

export default Home;