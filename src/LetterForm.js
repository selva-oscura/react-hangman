import React from 'react';
import './LetterForm.css';

const LetterForm = ({newLetter}) => (
	<div className="letterForm">
		<input 
			name="nextLetter" 
			type="text" 
			onChange={(e)=>{
				console.log('e.nativeEvent.target.value', e.nativeEvent.target.value)
				let inputValue = e.nativeEvent.target.value;
				newLetter(inputValue.toLowerCase());
	    	e.nativeEvent.target.value=""
			}}
		/>
	</div>
)

export default LetterForm;
