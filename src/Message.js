import React from 'react';
import './Message.css';

const Message = ({message, word, lastPicked}) => {
	switch(message){
		case 'select-level':
			message = <h4>Please Select Game Level.</h4>;
			break;
		case 'start':
			message = <h4>Please pick a letter.</h4>;
			break;		
		case 'pick-letter':
			message = <h4>Good choice!  Please pick another letter.</h4>;
			break;
		case 'letters-only':
			message = <h4>Please pick letters only.</h4>;
			break;
		case 'already-picked':
			message = <h4>{lastPicked} already picked.  Please pick a new letter.</h4>
			break;
		case 'wrong-pick-again':
			message = <h4>Eep! {lastPicked} isn&rsquo;t in the word.  Please pick a new letter.</h4>;
			break;
		case 'game-lost':
			message = <h4>Erk... {lastPicked} wasn&rsquo;t in the word.<br />Game over.  The word was {word}. New Game?</h4>;
			break;
		case 'game-won':
			message = <h4>Congratulations! You won!<br />New Game?</h4>;
			break;
		default:
			message = <h4>Hmmm....  Default message hit....  Erk....</h4>;
			break;
	}
	return (
		<div className="message">
			{message}
		</div>
	)
};

export default Message;