import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import QuestMain from './components/QuestMain'
import Header from './components/Header'
import GetStarted from './components/GetStarted'

function App() {
  return (
    <div>
    <Header />
    <GetStarted />
    <QuestMain />
    </div>
  );
}

export default App;