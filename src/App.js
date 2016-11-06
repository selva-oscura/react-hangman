import React from 'react';
import './App.css';
import data from '../public/words.json';
import Gallows from './Gallows';
import Header from './Header';
import LettersPicked from './LettersPicked';
import Word from './Word';
import LetterForm from './LetterForm';


const App = React.createClass({
  getInitialState(){
    return {
      scores:{
        hangman:0,
        player:0,
      },
      // word: undefined,
      word: data.words[2],
      lettersPicked:[],
      wrongLetters: 0,
      message:"start",
    }
  },
  newLetter(letter){
    let state = this.state;
    state.lettersPicked.push(letter);
    if(state.word.indexOf(letter)<0){
      state.wrongLetters += 1;
    }
    this.setState(state);
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
        <LettersPicked  
          lettersPicked={this.state.lettersPicked}
        />        
        <Word 
          word={this.state.word}
          lettersPicked={this.state.lettersPicked}
        />
        <LetterForm 
          newLetter={this.newLetter}
        />
      </div>
    );
  }
});

export default App;

