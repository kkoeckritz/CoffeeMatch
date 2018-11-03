import "./QuestMain.css";
import React from "react";

const QuestMain = props => 
    <div className="quest_main">
        <main className="container-fluid center">
            <div className="row">
                <div className="col m12">
                    <div className="questions center">
                        <div className="card-content white-text">
                            <span className="card-title center">
                            
                                <h3>Tell me, what's your style?</h3>
                            </span>
                        </div>
                       
                        <br />
                        <br />

                        <div className="container questGrid center">
					<figure className="effect-ruby">
						<img src="https://burst.shopifycdn.com/photos/pouring-hot-coffee_373x@2x.progressive.jpg" alt="img13"/>
						<figcaption>
							<h2>DECAF & <span>POINTLESS</span></h2>
							<p>Slow your roll</p>
							<a href="#">View more</a>
						</figcaption>			
					</figure>
					<figure className="effect-ruby">
						<img src="https://www.maxpixel.net/static/photo/2x/Aroma-Beans-Coffee-Beans-Roasted-Coffee-Caffeine-2318307.jpg" alt="img14"/>
						<figcaption>
							<h2>SMOOTH & <span>MELLOW</span></h2>
							<p>Safe decision.</p>
							<a href="#">View more</a>
						</figcaption>			
					</figure>
                    <figure className="effect-ruby">
						<img src="https://www.goodfreephotos.com/albums/food/cup-of-coffee-on-table.jpg" alt="img14"/>
						<figcaption>
							<h2>BOLD & <span>ADVENTUROUS</span></h2>
							<p>Ohh your'e courageous!</p>
							<a href="#">View more</a>
						</figcaption>			
					</figure>
				</div>

                    </div>
                </div>
            </div>
        </main>
    </div>

export default QuestMain; 