import React, { Component } from "react";
import "./Results.css";

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
          return (
            <figure
              className="effect-bubba z-depth-3"
              key={product.name}
            >
              <img src={product.image} alt={product.name} />
              <figcaption>
                <h2 class="result">{product.name}</h2>
                {/* <p>{this.state.info[0]}</p> */}
                <a href={product.url} target="_blank">{product.name}</a>
              </figcaption>
            </figure>
          )
        })
        this.setState({ products: products });
        console.log("state", this.state.products);
      }
      )
  }

  render() {
    return (
      <div className="caffeine container center">
        <h4>{this.props.text.result}</h4>
        <div className="content">
          <div className="grid">
            {this.state.products}

            <figure className="effect-bubba z-depth-3">
              <img src="./assets/images/coffee-in-sun.jpg" alt="" />
              <figcaption
                onClick={() => this.props.history.goBack()} className="back"
              >
                <h2>Go Back</h2>
                <p><i class="large material-icons">arrow_back</i></p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    )
  }
}

export default Results;