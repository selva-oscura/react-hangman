import React from 'react';
import './Letter.css';

const Letter = ({letter, i, lettersPlayed, wordLength}) => {
	let displayedLetter;
	if(lettersPlayed.indexOf(letter)>=0){
		displayedLetter = letter;
	}else{
		displayedLetter = " ";
	}
	return (
		<div className="letter">
			<p>{displayedLetter}</p>
		</div>
	)
};

export default Letter;
