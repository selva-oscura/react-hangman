import React from 'react';
import './Interactions.css';
import Message from './Message';
import LettersSelection from './LettersSelection';


const Interactions = ({message, word, lastPicked, availableLetters, selectLetter, displayLetterForm, newGame}) => {
	let displayLetters;
	console.log('displayLetterForm', displayLetterForm)
	if(displayLetterForm){
		displayLetters = (
			<LettersSelection 
				availableLetters={availableLetters}
				selectLetter={selectLetter}
			/>
		);
	}
	return(
		<div className="interactions">
			<Message 
				message={message} 
				word={word}
				lastPicked={lastPicked}
				newGame={newGame}
			/>
			{displayLetters}
		</div>
	)
};

export default Interactions;