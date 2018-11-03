import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import TopBar from './components/TopBar';
import QuestMain from './components/QuestMain';
import Products from './components/Products';

class App extends Component {

  state = {
    cur_ind: 0,

    quiz_text: {
      questions: [
        "Unsure of which coffee to choose? SoulMate will help you decide.",
        "How do you like it?",
        "What's your style?",
        "What suits your palate?"
      ],
      answers: [
        [
          "Get started"
        ],
        [
          "Decaf",
          "Caffeinated",
        ],
        [
          "Casual",
          "Roaster's Selection",
          "Rare & Reserve"
        ],
        [
          "Citrus & Berry",
          "Chocolate & Nuts",
          "Spice and Earth"
        ]
      ]
    }
  };

  incCur = () => {
    let new_ind = 0;
    if (this.state.cur_ind <= this.state.quiz_text.questions.length)
    {
      new_ind = this.state.cur_ind + 1;
    } else {
      new_ind = this.state.cur_ind;
    }
    this.setState({ cur_ind: new_ind});
  };
  
  render() {
    return (
      <div>
        <TopBar/>
        <br />
        <QuestMain
          cur_quest={this.state.quiz_text.questions[this.state.cur_ind]} 
          cur_ans={this.state.quiz_text.answers[this.state.cur_ind]} 
          nextQuest={this.incCur} />
        <br />
        <Products />
      </div>
  
    );
  }
}

export default App;