import React, { Component } from 'react';

import NavBar from './components/NavBar';
// import Footer from './components/Footer';

import Routes from './routes';

class App extends Component {

  state = {
    caffeine: "caffeine",
    collectionHandle: "none"
  }

  setCaffeine = (caffeineToSet) => {
    console.log(`setCaffeine(${caffeineToSet})`);
    this.setState({ caffeine: caffeineToSet});
  }

  setCollection = (collectionHandleToSet) => {
    console.log(`setCollection(${collectionHandleToSet})`);
    this.setState({ collectionHandle: collectionHandleToSet});
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
        />
        {/* <Footer /> */}
        
      </div>
  
    );
  }
}

export default App;