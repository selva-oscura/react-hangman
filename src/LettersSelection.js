import React from 'react';
import LetterSelection from './LetterSelection';
import './LettersSelection.css';

const LettersSelection = ({availableLetters, selectLetter}) => {
	let letters = availableLetters.map((availableLetter) => (
		<LetterSelection 
			availableLetter={availableLetter}
			selectLetter={selectLetter} 
		/>
	));
	return(
		<div className="lettersSelection">
			{letters}
		</div>
	)
}

export default LettersSelection;

