import React from 'react';
import './Letter.css';

const Letter = ({letter, i, lettersPicked, wordLength}) => {
	let displayedLetter;
	let color = Math.floor((i/wordLength)*360);
	if(lettersPicked.indexOf(letter)>=0){
		displayedLetter = letter;
	}else{
		displayedLetter = " ";
	}
	return (
		<div className="letter" style={{borderBottom: `4px solid hsl(${color}, 100%, 66%)`}}>
			<h4 style={{color: `hsl(${color}, 100%, 66%)`}}>{displayedLetter}</h4>
		</div>
	)
};

export default Letter;
