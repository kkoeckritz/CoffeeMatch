import React, { Component } from "react";
import "./Home.css";
import {withRouter} from 'react-router-dom';

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
            <div className="container-fluid">
            <div className="question1">
                <h5>{ this.state.question }</h5>
                <div className="content">
                    <div className="grid">
                        <figure className="effect-bubba z-depth-3">
                            <img src="" alt="" />
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
                            <img src="" alt="" />
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

                        <figure className="effect-bubba z-depth-3">
                            <img src="" alt="" />
                            <figcaption
                                onClick={() => this.props.history.goBack()}
                            >
                            <h2>Go Back</h2>
                            <p><i class="large material-icons">arrow_back</i>
                            </p>
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </div>  

            {/* <p className="center-align">
            <div class="btn-floating btn-large waves-effect waves-light red">
                <a class="waves-effect waves-light btn btn-floating btn-large red darken-1" ><i class="material-icons" onClick={() => this.props.history.goBack()}>arrow_back</i></a>
            </div>
            </p> */}

            </div>  

     
            
        )
    }
}

export default Home;