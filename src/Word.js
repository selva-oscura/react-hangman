import React from 'react';
import Letter from './Letter';
import './Word.css';

const Word = ({word, lettersPlayed}) => {
	const letters = word.split("");
	const wordLength = word.length;
	return(
		<div className="word">
			{
				letters.map((letter, i) => <Letter key={i} letter={letter} i={i} lettersPlayed={lettersPlayed} wordLength={wordLength} />)
			}
		</div>
	)
};

export default Word;