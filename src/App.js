import React from 'react';
import './App.css';
import data from '../public/words.json';
import Gallows from './Gallows';
import Header from './Header';
import Word from './Word';
import LettersPicked from './LettersPicked';

const App = React.createClass({
  getInitialState(){
    return {
      scores:{
        hangman:0,
        player:0,
      },
      // word: undefined,
      // lettersPicked:[],
      word: data.words[2],
      lettersPicked:["a", "b", "c"],
      wrongLetters: 1,
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
        <Word 
          word={this.state.word}
          lettersPicked={this.state.lettersPicked}
        />
        <LettersPicked  
          lettersPicked={this.state.lettersPicked}
        />        
      </div>
    );
  }
});

export default App;

