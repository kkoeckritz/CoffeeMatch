import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import QuestMain from './components/QuestMain'
import Header from './components/Header'
import GetStarted from './components/GetStarted'
import Questionaire from './components/Questionaire'

function App() {
  return (
    <div>
    <Header />
    <GetStarted />
    <br />
    <br />
    <Questionaire />

    <QuestMain />
    </div>
  );
}

export default App;