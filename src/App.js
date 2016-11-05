import React from 'react';
import './App.css';
import data from '../public/words.json';
import Gallows from './Gallows';


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
    console.log('words:', data.words);
    return (
      <div className="App">
        <h2>The Pen is Mightier than the Sword</h2>
        <h3>But Watch Out for the Hangman</h3>
        <Gallows 
          wrongLetters={this.state.wrongLetters}
        />
      </div>
    );
  }
});

export default App;
