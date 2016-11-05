import React from 'react';
import './Word.css';

const Word = ({word, lettersPlayed}) => {
	return(
		<div className="word">
			<p>word: {word}</p>
			<p>letters played: {lettersPlayed}</p>
		</div>
	)
};

export default Word;