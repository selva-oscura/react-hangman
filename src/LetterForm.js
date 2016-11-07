import React from 'react';
import './LetterForm.css';

const LetterForm = ({defaultLetter, newLetter}) => (
	<div className="letterForm">
		<input 
			name="nextLetter" 
			type="text" 
			value={defaultLetter}
			onChange={(e)=>{
				console.log('e.nativeEvent.target.value', e.nativeEvent.target.value)
				let inputValue = e.nativeEvent.target.value;
				newLetter(inputValue.toLowerCase());
			}}
		/>
	</div>
)

export default LetterForm;
