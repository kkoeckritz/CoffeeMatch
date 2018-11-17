import React, { Component } from "react";
import "./Tags.css";

class Tags extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: []
    };
  }

  componentDidMount() {

    fetch(`/api/tags/${this.props.collection}/${this.props.caffeine}`)
      .then(results => {
        console.log(results);
        return results.json();
      }).then(data => {
        let tags = data.map((tag) => {

          return (
            <figure
              className="effect-bubba z-depth-3"
              onClick={() => {
                console.log(this.props);
                this.props.setTag(tag.name);
                this.props.history.push("/results");
              }}
              key={tag.name}
            >
                <img src={tag.url} alt={tag.name} />
                <figcaption>
                  <h2>{tag.name}</h2>
                  {/* <p>{this.state.info[0]}</p> */}
                  {/* <a href="/decaf">{collection.name}</a> */}
                </figcaption>
            </figure>
          )
        })
        this.setState({ tags: tags });
        console.log("state", this.state.tags);
      }
      )
  }

  render() {
    return (
      <div className="caffeine container center">
        <h4>{this.props.text.question3}</h4>
        <div className="content">
          <div className="grid">
            {this.state.tags}

            <figure className="effect-bubba z-depth-3">
              <img src="./assets/images/coffee-in-sun.jpg" alt="" />
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

export default Tags;