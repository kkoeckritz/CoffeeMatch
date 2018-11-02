import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';

import TopBar from './components/TopBar';
import QuestMain from './components/QuestMain'

function App() {
  return (
    <div>
      <TopBar/>
      <QuestMain />
    </div>

  );
}

export default App;