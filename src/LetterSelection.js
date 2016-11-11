import React from 'react';
import './Letter.css';

const LetterSelection = ({availableLetter, selectLetter}) => {
	let classParams;
	if(availableLetter.available){
		classParams = "letter";
	}else{
		classParams = "letter unavailable";
	}
	return(
		<div 
			className={classParams}
			onClick={() => {
				selectLetter(availableLetter);
			}
		}>
			<h4>{availableLetter.letter}</h4>
		</div>
	)
}


export default LetterSelection;
