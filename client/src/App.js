import React, { Component } from 'react';

import NavBar from './components/NavBar';
// import Footer from './components/Footer';

import Routes from './routes';

class App extends Component {

  state = {
    caffeine: "caffeine",
    collectionHandle: "none",
    tag: "none"
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