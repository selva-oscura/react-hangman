import React from 'react';
import './LetterForm.css';

const LetterForm = ({defaultLetter, newLetter}) => (
	<div className="letterForm">
		<label htmlFor="nextLetter">Next Letter</label>
		<input 
			name="nextLetter" 
			type="text" 
			value={defaultLetter}
			autoFocus
			onChange={(e)=>{
				let inputValue = e.nativeEvent.target.value;
				if(inputValue.length===1){
					newLetter(inputValue.toLowerCase());
				}else{
					inputValue = inputValue[inputValue.length-1];
					newLetter(inputValue.toLowerCase());
					e.nativeEvent.target.value = inputValue;
				}
			}}
		/>
	</div>
);

export default LetterForm;
