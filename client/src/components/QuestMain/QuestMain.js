import "./QuestMain.css";
import React from "react";

const QuestMain = props => 
    <div className="quest_main">
        <main className="container">
            <div className="row">
                <div className="col m12">
                    <div className="card brown darken-3">
                        <div className="card-content white-text">
                            <span className="card-title center">
                                <h3>Tell me, what's your style?</h3>
                            </span>
                        </div>
                        <div className="card-action">
                            <div class="row">
                                <div className="col s4">
                                    <div class="center">
                                        <button class="btn-large red darken-2">Decaf & Pointless</button>
                                    </div>                                        </div>
                                <div className="col s4">
                                    <div class="center">
                                        <button class="btn-large red darken-2">Smooth & Mellow</button>
                                    </div>          
                                </div>
                                <div className="col s4">
                                    <div class="center">
                                        <button class="btn-large red darken-2">Bold & Adventurous</button>
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