import React, {Component} from "react";
import "./Caffeine.css";
import axios from 'axios';

class Caffeine extends Component { 
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          questionText: "Now then, do you prefer familiar flavors or something a bit more adventurous? Choose a collection below.",
          isLoaded: false,
          collections: [],
          answersFunction: () => {
            axios.get("/api/collections").then((collections) => {
              return collections.map(collection => {
                return {
                  text: collection.name,
                  value: collection.handle,
                }

              }
            )
            });
          }
        
    

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

      componentWillRecieveProps(nextProps) {
        
      }
    
      render() {
        
          return (
              <div className="caffeine">
                <p>{ this.state.questionText } </p>
            
          
             
            
            </div>
          );
        
      }
    }

export default Caffeine;