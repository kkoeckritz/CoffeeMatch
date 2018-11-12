import React, {Component} from "react";
import "./Caffeine.css";
// import axios from 'axios';

class Caffeine extends Component { 
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          collections: []
        };
      }
    
      componentDidMount() {
        fetch("/api/collections")
          .then(res => res.json())
          .then(
            (result) => {
                console.log(result);
              this.setState({
                isLoaded: true,
                collections: result.collections
              });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }
    
      render() {
        const { error, isLoaded, collections } = this.state;
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else {
          return (
              <div>
            
              {collections.map(collection => (
                  
                <h1>
                  {collection.name}
                </h1>
              ))}
            
            </div>
          );
        }
      }
    }

export default Caffeine;