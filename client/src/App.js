import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import TopBar from './components/TopBar';
import QuestMain from './components/QuestMain';
import Products from './components/Products';


class App extends Component {

  state = { 
    questionIndex: 0,
    caffeinated: "caffeinated",
    collection: "none",
    tag: "none",
    questions: [
      { 
        questionText: "First thing's first: Regular or Decaf?",
        answersFunction: () => {
          return [
            { text: "Decaf & Pointless", value: "decaf" },
            { text: "Caffeinated", value: "caffeinated" }
          ];
        }
      },
      {
        questionText: "Now then, do you prefer familiar flavors or something a bit more adventurous? Choose a collection below.",
        answersFunction: () => {
          axios.get("/api/collections").then((collections) => {
            console.log(collections);
            return collections.map(collection => {
              return {
                text: collection.name,
                value: collection.handle,
              }
            });
          });
        }
      },
      {
        questionText: "You're almost done! Which flavor profile most appeals to you?",
        answersFunction: () => {
          axios.get(`/api/tags/${this.collection}/${this.caffeinated}`).then(tags => {
            return tags.map(tag => {
              console.log(tags);
              return {
                text: tag,
                value: tag
              }
            });
          });
        }
      },
    ]
  }

  // increments current index val for state questions
  incCur = () => {
    if (this.state.questionIndex < 2)
    {
      this.setState({ questionIndex: this.state.questionIndex + 1});
    }
  };

  // // old state
  // state = {
  //   cur_ind: 0,

  //   quiz_text: {
  //     questions: [
  //       "Unsure of which coffee to choose? SoulMate will help you decide.",
  //       "How do you like it?",
  //       "What's your style?",
  //       "What suits your palate?"
  //     ],
  //     answers: [
  //       [
  //         "Get started"
  //       ],
  //       [
  //         "Decaf",
  //         "Caffeinated",
  //       ],
  //       [
  //         "Casual",
  //         "Roaster's Selection",
  //         "Rare & Reserve"
  //       ],
  //       [
  //         "Citrus & Berry",
  //         "Chocolate & Nuts",
  //         "Spice & Earth"
  //       ]
  //     ]
  //   }
  // };
  
  render() {
    return (
      <div>
        <TopBar/>
        <br />
        <QuestMain
          cur_quest={this.state.questions[this.state.questionIndex].questionText} 
          cur_ans={this.state.questions[this.state.questionIndex].answersFunction} 
          nextQuest={this.incCur} />
        <br />
        <Products />
      </div>
  
    );
  }
}

export default App;