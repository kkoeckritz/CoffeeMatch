import React, { Component } from 'react';

import NavBar from './components/NavBar';
// import Footer from './components/Footer';

import Routes from './routes';

class App extends Component {

  state = {
    caffeine: "caffeine",
  }

  setCaffeine = (caffeineToSet) => {
    console.log(`setCaffeine(${caffeineToSet})`);
    this.setState({ caffeine: caffeineToSet});
  }

  render() {
    return (
      <div>
        <NavBar />
        <Routes 
          caffeine={this.state.caffeine}
          setCaffeine={this.setCaffeine}
        />
        {/* <Footer /> */}
        
      </div>
  
    );
  }
}

export default App;