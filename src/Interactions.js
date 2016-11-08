import React from 'react';
import './Interactions.css';
import Message from './Message';
import LetterForm from './LetterForm';
import NewGame from './NewGame';

const Interactions = ({message, word, defaultLetter, newLetter, displayLetterForm, newGame}) => {
	let userResponse;
	if(displayLetterForm){
		userResponse = (
			<LetterForm 
				defaultLetter={defaultLetter}
				newLetter={newLetter}
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
			/>
			{userResponse}
		</div>
	)
};

export default Interactions;