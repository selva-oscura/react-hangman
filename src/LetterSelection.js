import React from 'react';
import './Letter.css';

const LetterSelection = ({availableLetter, selectLetter}) => {
	return(
		<div 
			onClick={() => {
				selectLetter(availableLetter);
			}
		}>
			<h4>{availableLetter.letter}</h4>
		</div>
	)
}


export default LetterSelection;
