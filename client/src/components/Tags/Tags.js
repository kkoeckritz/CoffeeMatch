import React, {Component} from "react";
import "./Tags.css";

class Tags extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      question: "You're almost done! Which flavor profile most appeals to you?",
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
          return(
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
        this.setState({tags: tags});
        console.log("state", this.state.tags);
      }
    )
  }

  render() {
    return(
      <div className="caffeine">
        <p>{this.state.question}</p>
        <div className="content">
          <div className="grid">
            {this.state.tags}
          </div>
        </div>
      </div>
    )
  }
}

export default Tags;