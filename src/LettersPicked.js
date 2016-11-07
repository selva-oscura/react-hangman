import React from 'react';
import './LettersPicked.css';

const LettersPicked = ({lettersPicked}) => (
	<div className="lettersPicked">
		<h4>Letters Picked: {lettersPicked.map((letter) => letter).join(", ")}</h4>
	</div>
);

export default LettersPicked;