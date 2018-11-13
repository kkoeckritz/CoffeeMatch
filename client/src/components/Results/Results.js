import React, {Component} from "react";
import "./Results.css";

class Results extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      question: "You made it! Take a look at these matches!",
      products: []
    };
  }

  componentDidMount() {
    
    fetch(`/api/products/${this.props.collection}/${this.props.tag}/${this.props.caffeine}`)
      .then(results => {
        console.log(results);
        return results.json();
      }).then(data => {
        let products = data.map((product) => {
          return(
            <figure 
              className="effect-bubba z-depth-3"
              onClick={() => {
                console.log(this.props);
                this.props.history.push("/tags");
              }}
              key={product._id}
            >
                <img src="https://tympanus.net/Development/HoverEffectIdeas/img/2.jpg" alt="img02" />
                <figcaption>
                  <h2>{product.name}</h2>
                  {/* <p>{this.state.info[0]}</p> */}
                  {/* <a href="/decaf">{collection.name}</a> */}
                </figcaption>
            </figure>
          )
        })
        this.setState({products: products});
        console.log("state", this.state.products);
      }
    )
  }

  render() {
    return(
      <div className="caffeine">
        <p>{this.state.question}</p>
        <div className="content">
          <div className="grid">
            {this.state.products}
          </div>
        </div>
      </div>
    )
  }
}

export default Results;