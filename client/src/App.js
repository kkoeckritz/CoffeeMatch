import React, { Component } from 'react';

import NavBar from './components/NavBar';
// import Footer from './components/Footer';

import Routes from './routes';

class App extends Component {
  
  render() {
    return (
      <div>
        <NavBar />
        <Routes />
        {/* <Footer /> */}
        
      </div>
  
    );
  }
}

export default App;