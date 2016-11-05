import React from 'react';

const Letter = ({letter,lettersPlayed}) => (
	<div className="letter">{letter} {lettersPlayed}</div>
);

export default Letter;