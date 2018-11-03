import "./QuestMain.css";
import React from "react";

const QuestMain = props => 
    <div className="quest_main">
        <main className="container">
            <div className="row">
                <div className="col m12">
                    <div className="questions">
                        <div className="card-content white-text">
                            <span className="card-title center">
                            
                                <h3>Tell me, what's your style?</h3>
                            </span>
                        </div>
                       
                        <br />
                        <br />
                        <div className="card-action">
                            <div class="row">
                                <div className="col s4">
                                    <div class="center">
                                        <button class="btn-large red darken-4">Decaf & Pointless</button>
                                    </div>                                        </div>
                                <div className="col s4">
                                    <div class="center">
                                        <button class="btn-large red darken-4">Smooth & Mellow</button>
                                    </div>          
                                </div>
                                <div className="col s4">
                                    <div class="center">
                                        <button class="btn-large red darken-4">Bold & Adventurous</button>
                                    </div>          
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>

export default QuestMain; 