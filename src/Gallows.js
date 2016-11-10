import React from 'react';
import './Gallows.css';

const Gallows = ({wrongLetters}) => {
	let hangedMan;
	switch(wrongLetters){
		case 1:
			hangedMan = (
				<g>
					<circle cx="59.5%" cy="25%" r="8%" stroke="red" strokeWidth="6" />					
				</g>
			);
			break;
		case 2:
			hangedMan = (
				<g>
					<line x1="59.5%" y1="33%" x2="59%" y2="68%" stroke="yellow" strokeWidth="6" />
					<circle cx="59.5%" cy="25%" r="8%" stroke="red" strokeWidth="6" />					
				</g>
			);
			break;
		case 3:
			hangedMan = (
				<g>
					<line x1="59.5%" y1="47%" x2="50%" y2="47%" stroke="orange" strokeWidth="6" />
					<line x1="59.5%" y1="33%" x2="59%" y2="68%" stroke="yellow" strokeWidth="6" />
					<circle cx="59.5%" cy="25%" r="8%" stroke="red" strokeWidth="6" />					
				</g>
			);
			break;
		default:
			hangedMan = (
				<g>
				</g>
			);
	}
	return (
		<div className="gallows">
			<svg xmlns="http://www.w3.org/svg/2000">
				<rect width="30%" height="90%" x="30%" y="10%" stroke="white" fill="white" />
				<rect width="28%" height="88%" x="31%" y="12%" stroke="black" fill="black" />
				<rect width="6%" height="80%" x="55%" y="20%" stroke="black" fill="black" />
				<line x1="15%" y1="100%" x2="45%" y2="100%" strokeWidth="30" stroke="white" />
				{hangedMan}
			</svg>
		</div>
	)
}

export default Gallows;

