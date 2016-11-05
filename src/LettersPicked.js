import React from 'react';

const LettersPicked = ({lettersPicked}) => (
	<div className="lettersPicked">
		<p>{lettersPicked.join(", ")}</p>
	</div>
);

export default LettersPicked;