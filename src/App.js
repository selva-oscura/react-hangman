import React from 'react';
import './App.css';
import data from '../public/words.json';
import Gallows from './Gallows';
import Header from './Header';
import LettersPicked from './LettersPicked';
import Word from './Word';
import Interactions from './Interactions';

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
      defaultLetter: "",
      maxWrong: 6,
      displayLetterForm: true,
    }
  },
  newLetter(letter){
    let state = this.state;
    letter = letter.toLowerCase();
    state.defaultLetter = letter;
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
    this.checkGameOver();
    setTimeout(() => {
      state.defaultLetter = "";
      this.setState(state);
    }, 500)
  },
  checkGameOver(){
    let state = this.state;
    if(state.wrongLetters===state.maxWrong){
      state.message = 'game-lost';
      state.scores.hangman +=1;
      state.displayLetterForm = false;
    }else{
      let wordGuessed = true;
      state.word.split("").forEach((letter) => {
        if(!state.lettersPicked.includes(letter)){
          wordGuessed = false;
        }
      });
      if(wordGuessed){
        state.message = 'game-won';
        state.scores.player +=1;
        state.displayLetterForm = false;
      }
    }
    this.setState(state);
  },
  newGame(){
    let state = this.state;
    const randomWord = Math.floor(Math.random()*data.words.length);
    console.log(data.words[randomWord]);
    state.word = data.words[randomWord];
    state.lettersPicked = [];
    state.message = "start";
    state.displayLetterForm = true;
    state.wrongLetters = 0;
    this.setState(state);
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
        <Interactions 
          message={this.state.message}
          word={this.state.word}
          defaultLetter={this.state.defaultLetter}
          newLetter={this.newLetter}
          displayLetterForm={this.state.displayLetterForm}
          newGame={this.newGame}
        />
      </div>
    );
  }
});

export default App;
