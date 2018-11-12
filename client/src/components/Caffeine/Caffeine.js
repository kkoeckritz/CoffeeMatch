import React, {Component} from "react";
import "./Caffeine.css";
// import axios from 'axios';

class Caffeine extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      collections: []
    };
  }

  componentDidMount() {
    
    fetch("/api/collections")
      .then(results => {
        return results.json();
      }).then(data => {
        let collections = data.map((collection) => {
          return(
            <div key={collection.results}>
              <p>{collection.name}</p>

              </div>
          )
        })
        this.setState({collections: collections});
        console.log("state", this.state.collections);

      }
    )
        
       
  }

  render() {
      return(
        <div className="caffeine">
            <p>{this.state.collections}</p>
        </div>
      )
    }
    }

export default Caffeine;