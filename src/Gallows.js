import React from 'react';

const Gallows = ({wrongLetters}) => {
	return (
		<div className="gallows">
			<p>{wrongLetters}</p>
		</div>
	)
}

export default Gallows;