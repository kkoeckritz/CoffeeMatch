import React, { Component } from 'react';

import NavBar from './components/NavBar';
// import Footer from './components/Footer';

import Routes from './routes';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      choices: ["Decaf & Pointless", "Caffeinated"],
      info: ["Description of decaf", "Description of Caffeine"],
      text: {
        question1: "First things first: Regular or Decaf?",
        question2: "Now then, do you prefer familiar flavors or something a bit more adventurous?",
        question3: "You're almost done! Which flavor profile most appeals to you?",
        result: "You made it! Take a look at these matches!"
      },
      caffeine: "caffeine",
      collectionHandle: "none",
      tag: "none"
  }
}

  setCaffeine = (caffeineToSet) => {
    console.log(`setCaffeine(${caffeineToSet})`);
    this.setState({ caffeine: caffeineToSet});
  }

  setCollection = (collectionHandleToSet) => {
    console.log(`setCollection(${collectionHandleToSet})`);
    this.setState({ collectionHandle: collectionHandleToSet});
  }

  setTag = (tagToSet) => {
    console.log(`setTag(${tagToSet})`);
    this.setState({ tag: tagToSet});
  }

  render() {
    return (
      <div>
        <NavBar /> 
        
        <Routes
          choices={this.state.choices}
          info={this.state.choices}
          text={this.state.text}
          caffeine={this.state.caffeine}
          setCaffeine={this.setCaffeine}
          collection={this.state.collectionHandle}
          setCollection={this.setCollection}
          tag={this.state.tag}
          setTag={this.setTag}
        />
     
        {/* <Footer /> */}
       
        
      </div>
  
    );
  }
}

export default App;