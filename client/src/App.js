import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import QuestMain from './components/QuestMain'
import Header from './components/Header'
import GetStarted from './components/GetStarted'
import Questionaire from './components/Questionaire'
import Products from './components/Products'
// import Collection from "./models/collections"

class App extends React.Component {
  state = {

  };

  render() {
    return (
      <div>
      <Header />
      <GetStarted />
      <br />
      <br />
      <Questionaire />
  
      <QuestMain />
      <br />
      <br />
      <hr />
      <Products />
      </div>
    );
  }
}

export default App;