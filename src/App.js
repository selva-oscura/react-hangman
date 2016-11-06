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
    const randomWord = Math.floor(Math.random()*data.words.length);
    console.log(data.words[randomWord]);
    return {
      scores:{
        hangman:0,
        player:0,
      },
      word: data.words[randomWord],
      lettersPicked:[],
      wrongLetters: 0,
      message:"start",
    }
  },
  newLetter(letter){
    let state = this.state;
    letter = letter.toLowerCase();
    if(letter.charCodeAt(0)>122 || letter.charCodeAt(0)<97){
      state.message="letters-only";
    }else if(state.lettersPicked.indexOf(letter)>=0){
      state.message="already-picked";
    }else{
      state.lettersPicked.push(letter);
      if(state.word.indexOf(letter)<0){
        state.wrongLetters += 1;
        state.message="wrong-pick-again";
      }else{
        state.message="pick-letter";
      }
    }
    this.setState(state);
    console.log('state after change',this.state.message);
  },
  render() {
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
