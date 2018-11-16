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
              onClick={() => {
                console.log(this.props);
                this.props.history.push("/tags");
              }}
              key={product._id}
            >
              <img src="" alt={product.name} />
              <figcaption>
                <h5>{product.name}</h5>
                {/* <p>{this.state.info[0]}</p> */}
                {/* <a href="/decaf">{collection.name}</a> */}
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
      <div className="caffeine">
        <h5>{this.props.text.result}</h5>
        <div className="content">
          <div className="grid">
            {this.state.products}

            <figure className="effect-bubba z-depth-3">
              <img src="" alt="" />
              <figcaption
                onClick={() => this.props.history.goBack()}
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