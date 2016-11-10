import React from 'react';
import './Gallows.css';

const Gallows = ({wrongLetters, message}) => {
	let hangedMan;
	if(message === "game-won"){
		wrongLetters = null;
	}
	switch(wrongLetters){
		case 1:
			hangedMan = (
				<g>
					<circle cx="59.5%" cy="20%" r="8%" stroke="red" strokeWidth="6" />
				</g>
			);
			break;
		case 2:
			hangedMan = (
				<g>
					<line x1="59.5%" y1="28%" x2="59%" y2="63%" stroke="yellow" strokeWidth="6" />
					<circle cx="59.5%" cy="20%" r="8%" stroke="red" strokeWidth="6" />				
				</g>
			);
			break;
		case 3:
			hangedMan = (
				<g>
					<line x1="59.5%" y1="42%" x2="50%" y2="42%" stroke="orange" strokeWidth="6" />
					<line x1="59.5%" y1="28%" x2="59%" y2="63%" stroke="yellow" strokeWidth="6" />
					<circle cx="59.5%" cy="20%" r="8%" stroke="red" strokeWidth="6" />					
				</g>
			);
			break;
		case 4:
			hangedMan = (
				<g>
					<line x1="59.5%" y1="42%" x2="69%" y2="42%" stroke="orange" strokeWidth="6" />
					<line x1="59.5%" y1="42%" x2="50%" y2="42%" stroke="orange" strokeWidth="6" />
					<line x1="59.5%" y1="28%" x2="59%" y2="63%" stroke="yellow" strokeWidth="6" />
					<circle cx="59.5%" cy="20%" r="8%" stroke="red" strokeWidth="6" />					
				</g>
			);
			break;
		case 5:
			hangedMan = (
				<g>
					<line x1="59%" y1="63%" x2="50%" y2="85%" stroke="green" strokeWidth="6" />
					<line x1="59.5%" y1="42%" x2="69%" y2="42%" stroke="orange" strokeWidth="6" />
					<line x1="59.5%" y1="42%" x2="50%" y2="42%" stroke="orange" strokeWidth="6" />
					<line x1="59.5%" y1="28%" x2="59%" y2="63%" stroke="yellow" strokeWidth="6" />
					<circle cx="59.5%" cy="20%" r="8%" stroke="red" strokeWidth="6" />					
				</g>
			);
			break;
		case 6:
			hangedMan = (
				<g>
					<line x1="59%" y1="63%" x2="69%" y2="85%" stroke="green" strokeWidth="6" />
					<line x1="59%" y1="63%" x2="50%" y2="85%" stroke="green" strokeWidth="6" />
					<line x1="59.5%" y1="42%" x2="69%" y2="42%" stroke="orange" strokeWidth="6" />
					<line x1="59.5%" y1="42%" x2="50%" y2="42%" stroke="orange" strokeWidth="6" />
					<line x1="59.5%" y1="28%" x2="59%" y2="63%" stroke="yellow" strokeWidth="6" />
					<circle cx="59.5%" cy="20%" r="8%" stroke="red" strokeWidth="6" />					
				</g>
			);
			break;
		case null:
			hangedMan = (
				<g>
					<line x1="79%" y1="78%" x2="89%" y2="100%" stroke="green" strokeWidth="6" />
					<line x1="79%" y1="78%" x2="70%" y2="100%" stroke="green" strokeWidth="6" />
					<line x1="79.5%" y1="57%" x2="89%" y2="57%" stroke="orange" strokeWidth="6" />
					<line x1="79.5%" y1="57%" x2="70%" y2="57%" stroke="orange" strokeWidth="6" />
					<line x1="79.5%" y1="43%" x2="79%" y2="78%" stroke="yellow" strokeWidth="6" />
					<circle cx="79.5%" cy="35%" r="8%" stroke="red" strokeWidth="6" />
					<circle cx="79.5%" cy="36%" r="5%" stroke="red" strokeWidth="6" />
					<rect width="9%" height="10%" x="75%" y="28%" stroke="black" fill="black" />
					<circle cx="77.5%" cy="33%" r="1.5%" stroke="red" strokeWidth="6" />
					<circle cx="81.5%" cy="33%" r="1.5%" stroke="red" strokeWidth="6" />
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
				<rect width="30%" height="98%" x="30%" y="2%" stroke="white" fill="white" />
				<rect width="28%" height="96%" x="31%" y="4%" stroke="black" fill="black" />
				<rect width="6%" height="85%" x="55%" y="15%" stroke="black" fill="black" />
				<line x1="15%" y1="100%" x2="45%" y2="100%" strokeWidth="30" stroke="white" />
				{hangedMan}
			</svg>
		</div>
	)
}

export default Gallows;

