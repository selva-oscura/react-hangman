import React from 'react';
import './Message.css';

const Message = ({message}) => {
	switch(message){
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
			message = <h4>The letter already picked.  Please pick a new letter.</h4>
			break;
		case 'wrong-pick-again':
			message = <h4>Eep! That letter isn&lsquo;t in the word.  Please pick a new letter.</h4>;
			break;
		case 'game-lost':
			message = <h4>Erk... That letter wasn't in the word.  Game over.<br />New Game?</h4>;
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