import React from 'react';
import './LettersPicked.css';

const LettersPicked = ({lettersPicked, word}) => {
	let letters = lettersPicked.map((letter, i)=>{
		let classParam;
		let separator;
		if (word.indexOf(letter)>-1){
			classParam = "correct"
		}else{
			classParam="incorrect";
		}
		if(i<lettersPicked.length-1){
			separator = ", ";
		}
		return (
			<span 
				className={classParam}
				key={i}
			>
				{letter.toUpperCase()}{separator}
			</span>
		)
	});
	return(
		<div className="lettersPicked">
			<h4>Letters Picked: {letters}</h4>
		</div>
	)
};

export default LettersPicked;