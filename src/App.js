import React from 'react';
import './App.css';
import data from '../public/words.json';
import Gallows from './Gallows';
import Header from './Header';
import DifficultyLevel from './DifficultyLevel';
import LettersPicked from './LettersPicked';
import Word from './Word';
import Interactions from './Interactions';

const App = React.createClass({
  getInitialState(){
    let hangmanAppData = localStorage.hangmanAppData;
    if(hangmanAppData){
      hangmanAppData = JSON.parse(hangmanAppData);
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
        difficultyLevel: "easy",
        maxWrong: 10,
        displayLetterForm: true,
      }
    }
  },
  difficulty(){
    return{
      easy: 11,
      hard: 7,
    }
  },
  updateDifficultyLevel(level){
    let state = this.state;
    let difficulty = this.difficulty();
    state.difficultyLevel = level;
    state.maxWrong = difficulty[level];
    this.setState(state);
  },
  selectLetter(letter){
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
    state.word = data.words[randomWord];
    state.lettersPicked = [];
    state.message = "start";
    state.displayLetterForm = true;
    state.wrongLetters = 0;
    state.lastPicked = "";
    state.availableLetters=letters;
    this.setState(state);
    let hangmanAppData = JSON.stringify(state);
    localStorage.hangmanAppData = hangmanAppData;
  },
  processKeyInput(keyCode){
    let state = this.state;
    if(state.displayLetterForm){
      if(keyCode>=65 && keyCode<=90){
        this.selectLetter(state.availableLetters[keyCode-65]);
      }else{
        state.message = "letters-only";
        this.setState(state);
      }
    }else{
      if(keyCode===32 || keyCode===13){
        this.newGame();
      }
    }
  },
  componentDidMount(){
    window.addEventListener('keyup', (e) => {
      var keyCode = (window.Event) ? e.which : e.keyCode;
      this.processKeyInput(keyCode);
    });
  },
  render() {
    return (
      <div className="App">
        <Header 
          scores={this.state.scores}
        />
        <Gallows 
          wrongLetters={this.state.wrongLetters}
          difficultyLevel={this.state.difficultyLevel}
          maxWrong={this.state.maxWrong}
          message={this.state.message}
        />
        <DifficultyLevel 
          difficultyLevel={this.state.difficultyLevel}
          updateDifficultyLevel={this.updateDifficultyLevel}
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
