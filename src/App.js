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
    // let local = localStorage;
    // console.log('localStorage', local);
    let hangmanAppData = localStorage.hangmanAppData;
    // console.log('hangmanAppData present?', hangmanAppData);
    if(hangmanAppData){
      hangmanAppData = JSON.parse(hangmanAppData);
      // console.log('hangmanAppData post parsing', hangmanAppData);
      return hangmanAppData;
    }else{    
      const randomWord = Math.floor(Math.random()*data.words.length);
      let letters = [];
      for(let i = 97; i<=122; i++){
        letters.push({
          index: i-97,
          letter: String.fromCharCode(i),
          available: true
        });
      }
      // console.log(data.words[randomWord]);
      return {
        scores:{
          hangman:0,
          player:0,
        },
        word: data.words[randomWord],
        availableLetters: letters,
        lettersPicked: [],
        lastPicked: "",
        wrongLetters: 0,
        message:"start",
        maxWrong: 6,
        displayLetterForm: true,
      }
    }
  },
  selectLetter(letter){
    console.log('letter', letter);
    let state = this.state;
    state.lastPicked=letter.letter;
    if(!letter.available){
      state.message="already-picked";
    }else{
      state.lettersPicked.push(letter.letter);
      state.availableLetters[letter.index].available = false;
      if(state.word.indexOf(letter.letter)<0){
        state.wrongLetters += 1;
        state.message="wrong-pick-again";
      }else{
        state.message="pick-letter";
      }
    }
    this.setState(state);
    let data = state;
    let hangmanAppData = JSON.stringify(data);
    localStorage.hangmanAppData = hangmanAppData;
    this.checkGameOver();
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
    let hangmanAppData = JSON.stringify(state);
    localStorage.hangmanAppData = hangmanAppData;
  },
  newGame(){
    let state = this.state;
    let letters = [];
    for(let i = 97; i<=122; i++){
      letters.push({
        index: i-97,
        letter: String.fromCharCode(i),
        available: true
      });
    }
    const randomWord = Math.floor(Math.random()*data.words.length);
    // console.log(data.words[randomWord]);
    state.word = data.words[randomWord];
    state.lettersPicked = [];
    state.message = "start";
    state.displayLetterForm = true;
    state.wrongLetters = 0;
    state.lastPicked = "";
    state.availableLetters=letters;
    console.log('state from newGame', state);
    this.setState(state);
    let hangmanAppData = JSON.stringify(state);
    localStorage.hangmanAppData = hangmanAppData;
  },
  render() {
    return (
      <div className="App">
        <Header 
          scores={this.state.scores}
        />
        <Gallows 
          wrongLetters={this.state.wrongLetters}
          message={this.state.message}
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
          lastPicked={this.state.lastPicked}
          lettersPicked={this.lettersPicked}
          availableLetters={this.state.availableLetters}
          selectLetter={this.selectLetter}
          displayLetterForm={this.state.displayLetterForm}
          newGame={this.newGame}
        />
      </div>
    );
  }
});

export default App;
