import React from 'react';
import './Interactions.css';
import Message from './Message.js';
import LetterForm from './LetterForm.js';

const Interactions = ({message, defaultLetter, newLetter}) => (
	<div className="interactions">
		<Message message={message} />
		<LetterForm 
			defaultLetter={defaultLetter}
			newLetter={newLetter}
		/>
	</div>
);

export default Interactions;