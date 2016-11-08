import React from 'react';
import './Gallows.css';

const Gallows = ({wrongLetters}) => {
	const hangedMan = (
		<g>
			
		</g>
	)
	return (
		<div className="gallows">
			<svg xmlns="http://www.w3.org/svg/2000">
				<rect width="30%" height="90%" x="30%" y="10%" stroke="white" fill="white" />
				<rect width="28%" height="88%" x="31%" y="12%" stroke="black" fill="black" />
				<rect width="5%" height="80%" x="55%" y="20%" stroke="black" fill="black" />
				<line x1="15%" y1="100%" x2="45%" y2="100%" strokeWidth="30" stroke="white" />
				{hangedMan}
			</svg>
		</div>
	)
}

export default Gallows;

