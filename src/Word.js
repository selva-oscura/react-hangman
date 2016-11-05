import React from 'react';
import Letter from './Letter';
import './Word.css';

const Word = ({word, lettersPlayed}) => {
	const letters = word.split("");
	return(
		<div className="word">
			{
				letters.map((letter, i) => <Letter key={i} letter={letter} lettersPlayed={lettersPlayed} />)
			}
		</div>
	)
};

export default Word;