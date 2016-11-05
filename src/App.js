import React from 'react';
import './App.css';
import data from '../public/words.json';
import Gallows from './Gallows';
import Header from './Header';

const App = React.createClass({
  getInitialState(){
    return {
      scores:{
        hangman:0,
        player:0,
      },
      word: undefined,
      lettersPlayed:[],
      wrongLetters: 0,
      message:"start",
    }
  },
  render() {
    console.log('words', data.words);
    return (
      <div className="App">
        <Header 
          scores={this.state.scores}
        />
        <Gallows 
          wrongLetters={this.state.wrongLetters}
        />
      </div>
    );
  }
});

export default App;
