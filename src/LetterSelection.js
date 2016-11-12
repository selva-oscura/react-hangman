import React from 'react';
import './Letter.css';

const LetterSelection = ({availableLetter, selectLetter, i, lettersCount}) => {
	let color = Math.floor(((i%9)/9)*360);
	let classParams;
	let style;
	if(availableLetter.available){
		classParams = "letter";
		style={color: `hsl(${color}, 100%, 66%)`};
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
			<h4 style={style}>
				{availableLetter.letter}
			</h4>
		</div>
	)
}


export default LetterSelection;
