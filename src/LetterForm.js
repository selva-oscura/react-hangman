import React from 'react';
import './LetterForm.css';

const LetterForm = ({defaultLetter, newLetter}) => (
	<div className="letterForm">
		<input 
			name="nextLetter" 
			type="text" 
			value={defaultLetter}
			autoFocus
			onChange={(e)=>{
				let inputValue = e.nativeEvent.target.value;
				newLetter(inputValue.toLowerCase());
			}}
		/>
	</div>
);

export default LetterForm;
