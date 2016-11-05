import React from 'react';
import './Letter.css';

const Letter = ({letter, i, lettersPlayed, wordLength}) => {
	let displayedLetter;
	let color = Math.floor((i/wordLength)*360);
	if(lettersPlayed.indexOf(letter)>=0){
		displayedLetter = letter;
	}else{
		displayedLetter = " ";
	}
	return (
		<div className="letter" style={{color: `hsl(${color}, 100%, 66%)`, borderBottom: `4px solid hsl(${color}, 100%, 66%)`}} >
			<p>{displayedLetter}</p>
		</div>
	)
};

export default Letter;