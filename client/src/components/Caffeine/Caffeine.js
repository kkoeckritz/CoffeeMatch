import React, { Component } from "react";
import "./Caffeine.css";

class Caffeine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: []
    };
  }

  componentDidMount() {

    fetch(`/api/collections/${this.props.caffeine}`)
      .then(results => {
        console.log(results);
        return results.json();
      }).then(data => {
        let collections = data.map((collection) => {
          return (
            <figure
              className="effect-bubba z-depth-3"
              onClick={() => {
                console.log(this.props);
                this.props.setCollection(collection.handle);
                this.props.history.push("/tags");
              }}
              key={collection._id}
            >
              <img src="" alt={collection.name} />
              <figcaption>
                <h2>{collection.name}</h2>
                {/* <p>{this.state.info[0]}</p> */}
                {/* <a href="/decaf">{collection.name}</a> */}
              </figcaption>
            </figure>
          )
        })
        this.setState({ collections: collections });
        console.log("state", this.state.collections);
      }
      )
  }

  render() {
    return (
      <div className="caffeine">
        <p>{this.props.text.question2}</p>
        <div className="content">
          <div className="grid">
            {this.state.collections}

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

export default Caffeine;