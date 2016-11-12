import React from 'react';
import LetterSelection from './LetterSelection';
import './LettersSelection.css';

const LettersSelection = ({availableLetters, selectLetter}) => {
	const lettersCount = availableLetters.length;
	const letters = availableLetters.map((availableLetter, i) => (
		<LetterSelection 
			availableLetter={availableLetter}
			selectLetter={selectLetter} 
			i={i}
			lettersCount={lettersCount}
		/>
	));
	return(
		<div className="lettersSelection">
			{letters}
		</div>
	)
}

export default LettersSelection;
