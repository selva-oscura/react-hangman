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
    let hangmanData = localStorage.hangmanData;
    if(hangmanData){
      hangmanData = JSON.parse(hangmanData);
      return hangmanData;
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
      hangmanData = {
        scores:{
          hangman:0,
          player:0,
        },
        word: data.words[randomWord],
        availableLetters: letters,
        lettersPicked: [],
        lastPicked: "",
        wrongLetters: 0,
        message:"select-level",
        difficultyLevel: "easy",
        maxWrong: 10,
        displayLetterForm: false,
      }
      localStorage.hangmanData = JSON.stringify(hangmanData);
      return hangmanData;
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
    state.message = "start";
    state.displayLetterForm = true;
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
    localStorage.hangmanData = JSON.stringify(state);
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
    localStorage.hangmanData = JSON.stringify(state);
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
    state.message = "select-level";
    state.wrongLetters = 0;
    state.lastPicked = "";
    state.availableLetters=letters;
    this.setState(state);
    localStorage.hangmanData = JSON.stringify(state);
  },
  processKeyInput(keyCode){
    let state = this.state;
    if(state.displayLetterForm){
      if(keyCode>=65 && keyCode<=90){
        this.selectLetter(state.availableLetters[keyCode-65]);
      }else{
        state.message = "letters-only";
        this.setState(state);
        localStorage.hangmanData = JSON.stringify(state);
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
    let state = this.state;
    let displayDifficultyLevelOrGame;
    if(state.message==="select-level"){
      displayDifficultyLevelOrGame = (
        <DifficultyLevel 
          difficultyLevel={this.state.difficultyLevel}
          updateDifficultyLevel={this.updateDifficultyLevel}
        />
      );
    }else{
      displayDifficultyLevelOrGame = (
        <div>
          <LettersPicked  
            lettersPicked={this.state.lettersPicked}
            word={this.state.word}
          />        
          <Word 
            word={this.state.word}
            lettersPicked={this.state.lettersPicked}
          />
        </div>
      );
    }
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
        {displayDifficultyLevelOrGame}
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
