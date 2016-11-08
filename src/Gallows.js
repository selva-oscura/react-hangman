import React from 'react';
import './Gallows.css';

const Gallows = ({scores, wrongLetters}) => {
	return (
		<div className="gallows">
	    <div className="left">
	    	<h4>
	    		Hanged<br />
	    		{scores.hangman}
	    	</h4>
	    </div>
	    <div className="right">
	    	<h4>
	    		Saved<br />
	    		{scores.player}
	    	</h4>
	    </div>
			<p>{wrongLetters}</p>
		</div>
	)
}

export default Gallows;