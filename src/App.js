import React, { Component } from 'react';
import './App.css';
import data from '../public/words.json';

class App extends Component {
  render() {
    console.log("words", data.words);
    return (
      <div className="App">
        <h2>The Pen is Mightier than the Sword</h2>
        <h3>But Watch Out for the Hangman</h3>
        <div className="body">
        </div>
      </div>
    );
  }
}

export default App;


