import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
    render() {
        return (
            <div className="container-fluid">
            <div className="question1">
                <h4>{this.props.text.question1}</h4>
                <div className="content">
                    <div className="grid">
                        <figure className="effect-bubba z-depth-3">
                            <img src="./assets/images/friends-cheers.jpg" alt="decaf" />
                            <figcaption
                                onClick={() => {
                                    this.props.setCaffeine("decaf");
                                    this.props.history.push('/caffeine');
                                }}
                            >
                                <h2>{this.props.choices[0]}</h2>
                                {/* <p>{this.props.info[0]}</p> */}
                            </figcaption>
                        </figure>
                        
                        <figure className="effect-bubba z-depth-3">
                            <img src="./assets/images/friends-drinking.jpg" alt="caffeine" />
                            <figcaption
                                onClick={() => {
                                    this.props.setCaffeine("caffeine");
                                    this.props.history.push('/caffeine');
                                }}
                            >
                                <h2>{this.props.choices[1]}</h2>
                                {/* <p>{this.props.info[1]}</p> */}
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