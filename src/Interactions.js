import React from 'react';
import './Interactions.css';
import Message from './Message';
import LettersSelection from './LettersSelection';
import NewGame from './NewGame';


const Interactions = ({message, word, lastPicked, availableLetters, selectLetter, displayLetterForm, newGame}) => {
	let userResponse;
	if(displayLetterForm){
		userResponse = (
			<LettersSelection 
				availableLetters={availableLetters}
				selectLetter={selectLetter}
			/>
		);
	}else{
		userResponse = (
			<NewGame 
				newGame={newGame}
			/>
		)
	}
	return(
		<div className="interactions">
			<Message 
				message={message} 
				word={word}
				lastPicked={lastPicked}
			/>
			{userResponse}
		</div>
	)
};

export default Interactions;