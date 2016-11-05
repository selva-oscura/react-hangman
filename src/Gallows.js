import React from 'react';
import './Gallows.css';

const Gallows = ({wrongLetters}) => {
	return (
		<div className="gallows">
			<p>{wrongLetters}</p>
		</div>
	)
}

export default Gallows;