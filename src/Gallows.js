import React from 'react';
import './Gallows.css';

const Gallows = ({wrongLetters, difficultyLevel, maxWrong, message}) => {
	let hangedMan;
	let levelAndWrongLetters = difficultyLevel+wrongLetters;
	if(wrongLetters>=maxWrong){
		levelAndWrongLetters = difficultyLevel+"-game-lost";
	}
	if(message === "game-won"){
		levelAndWrongLetters = null;
	}
	switch(levelAndWrongLetters){
		case "easy1":
		case "hard1":
			hangedMan = (
				<g>
					<circle cx="59.5%" cy="20%" r="8%" stroke="red" strokeWidth="6" />
				</g>
			);
			break;

		case "easy2":
		case "hard2":
			hangedMan = (
				<g>
					<line x1="59.5%" y1="28%" x2="59%" y2="63%" stroke="yellow" strokeWidth="6" />
					<circle cx="59.5%" cy="20%" r="8%" stroke="red" strokeWidth="6" />				
				</g>
			);
			break;

		case "easy3":
		case "hard3":
			hangedMan = (
				<g>
					<line x1="59.5%" y1="42%" x2="50%" y2="42%" stroke="orange" strokeWidth="6" />
					<line x1="59.5%" y1="28%" x2="59%" y2="63%" stroke="yellow" strokeWidth="6" />
					<circle cx="59.5%" cy="20%" r="8%" stroke="red" strokeWidth="6" />					
				</g>
			);
			break;

		case "easy4":
			hangedMan = (
				<g>
					<line x1="59.5%" y1="42%" x2="46%" y2="42%" stroke="orange" strokeWidth="6" />
					<line x1="50%" y1="36%" x2="50%" y2="48%" stroke="orange" strokeWidth="6" />
					<line x1="47%" y1="38%" x2="50%" y2="42%" stroke="orange" strokeWidth="6" />
					<line x1="47%" y1="46%" x2="50%" y2="42%" stroke="orange" strokeWidth="6" />
					<line x1="59.5%" y1="28%" x2="59%" y2="63%" stroke="yellow" strokeWidth="6" />
					<circle cx="59.5%" cy="20%" r="8%" stroke="red" strokeWidth="6" />					
				</g>
			);
			break;

		case "easy5":
			hangedMan = (
				<g>
					<line x1="59.5%" y1="42%" x2="69%" y2="42%" stroke="orange" strokeWidth="6" />
					<line x1="59.5%" y1="42%" x2="46%" y2="42%" stroke="orange" strokeWidth="6" />
					<line x1="50%" y1="36%" x2="50%" y2="48%" stroke="orange" strokeWidth="6" />
					<line x1="47%" y1="38%" x2="50%" y2="42%" stroke="orange" strokeWidth="6" />
					<line x1="47%" y1="46%" x2="50%" y2="42%" stroke="orange" strokeWidth="6" />					
					<line x1="59.5%" y1="28%" x2="59%" y2="63%" stroke="yellow" strokeWidth="6" />
					<circle cx="59.5%" cy="20%" r="8%" stroke="red" strokeWidth="6" />					
				</g>
			);
			break;

		case "easy6":
			hangedMan = (
				<g>
					<line x1="59.5%" y1="42%" x2="73%" y2="42%" stroke="orange" strokeWidth="6" />
					<line x1="69%" y1="36%" x2="69%" y2="48%" stroke="orange" strokeWidth="6" />
					<line x1="72%" y1="38%" x2="69%" y2="42%" stroke="orange" strokeWidth="6" />
					<line x1="72%" y1="46%" x2="69%" y2="42%" stroke="orange" strokeWidth="6" />
					<line x1="59.5%" y1="42%" x2="46%" y2="42%" stroke="orange" strokeWidth="6" />
					<line x1="50%" y1="36%" x2="50%" y2="48%" stroke="orange" strokeWidth="6" />
					<line x1="47%" y1="38%" x2="50%" y2="42%" stroke="orange" strokeWidth="6" />
					<line x1="47%" y1="46%" x2="50%" y2="42%" stroke="orange" strokeWidth="6" />
					<line x1="59.5%" y1="28%" x2="59%" y2="63%" stroke="yellow" strokeWidth="6" />
					<circle cx="59.5%" cy="20%" r="8%" stroke="red" strokeWidth="6" />					
				</g>
			);
			break;

		case "easy7":
			hangedMan = (
				<g>
					<line x1="59%" y1="63%" x2="50%" y2="85%" stroke="green" strokeWidth="6" />
					<line x1="59.5%" y1="42%" x2="73%" y2="42%" stroke="orange" strokeWidth="6" />
					<line x1="69%" y1="36%" x2="69%" y2="48%" stroke="orange" strokeWidth="6" />
					<line x1="72%" y1="38%" x2="69%" y2="42%" stroke="orange" strokeWidth="6" />
					<line x1="72%" y1="46%" x2="69%" y2="42%" stroke="orange" strokeWidth="6" />
					<line x1="59.5%" y1="42%" x2="46%" y2="42%" stroke="orange" strokeWidth="6" />
					<line x1="50%" y1="36%" x2="50%" y2="48%" stroke="orange" strokeWidth="6" />
					<line x1="47%" y1="38%" x2="50%" y2="42%" stroke="orange" strokeWidth="6" />
					<line x1="47%" y1="46%" x2="50%" y2="42%" stroke="orange" strokeWidth="6" />
					<line x1="59.5%" y1="28%" x2="59%" y2="63%" stroke="yellow" strokeWidth="6" />
					<circle cx="59.5%" cy="20%" r="8%" stroke="red" strokeWidth="6" />					
				</g>
			);
			break;

		case "easy8":
			hangedMan = (
				<g>
					<line x1="59%" y1="63%" x2="50%" y2="85%" stroke="green" strokeWidth="6" />
					<line x1="45%" y1="78%" x2="50%" y2="85%" stroke="blue" strokeWidth="6" />
					<line x1="59.5%" y1="42%" x2="73%" y2="42%" stroke="orange" strokeWidth="6" />
					<line x1="69%" y1="36%" x2="69%" y2="48%" stroke="orange" strokeWidth="6" />
					<line x1="72%" y1="38%" x2="69%" y2="42%" stroke="orange" strokeWidth="6" />
					<line x1="72%" y1="46%" x2="69%" y2="42%" stroke="orange" strokeWidth="6" />
					<line x1="59.5%" y1="42%" x2="46%" y2="42%" stroke="orange" strokeWidth="6" />
					<line x1="50%" y1="36%" x2="50%" y2="48%" stroke="orange" strokeWidth="6" />
					<line x1="47%" y1="38%" x2="50%" y2="42%" stroke="orange" strokeWidth="6" />
					<line x1="47%" y1="46%" x2="50%" y2="42%" stroke="orange" strokeWidth="6" />
					<line x1="59.5%" y1="28%" x2="59%" y2="63%" stroke="yellow" strokeWidth="6" />
					<circle cx="59.5%" cy="20%" r="8%" stroke="red" strokeWidth="6" />					
				</g>
			);
			break;

		case "easy9":
			hangedMan = (
				<g>
					<line x1="59%" y1="63%" x2="69%" y2="85%" stroke="green" strokeWidth="6" />
					<line x1="59%" y1="63%" x2="50%" y2="85%" stroke="green" strokeWidth="6" />
					<line x1="45%" y1="78%" x2="50%" y2="85%" stroke="blue" strokeWidth="6" />
					<line x1="59.5%" y1="42%" x2="73%" y2="42%" stroke="orange" strokeWidth="6" />
					<line x1="69%" y1="36%" x2="69%" y2="48%" stroke="orange" strokeWidth="6" />
					<line x1="72%" y1="38%" x2="69%" y2="42%" stroke="orange" strokeWidth="6" />
					<line x1="72%" y1="46%" x2="69%" y2="42%" stroke="orange" strokeWidth="6" />
					<line x1="59.5%" y1="42%" x2="46%" y2="42%" stroke="orange" strokeWidth="6" />
					<line x1="50%" y1="36%" x2="50%" y2="48%" stroke="orange" strokeWidth="6" />
					<line x1="47%" y1="38%" x2="50%" y2="42%" stroke="orange" strokeWidth="6" />
					<line x1="47%" y1="46%" x2="50%" y2="42%" stroke="orange" strokeWidth="6" />
					<line x1="59.5%" y1="28%" x2="59%" y2="63%" stroke="yellow" strokeWidth="6" />
					<circle cx="59.5%" cy="20%" r="8%" stroke="red" strokeWidth="6" />					
				</g>
			);
			break;

		case "easy10":
			hangedMan = (
				<g>
					<line x1="59%" y1="63%" x2="69%" y2="85%" stroke="green" strokeWidth="6" />
					<line x1="74%" y1="78%" x2="69%" y2="85%" stroke="blue" strokeWidth="6" />
					<line x1="59%" y1="63%" x2="50%" y2="85%" stroke="green" strokeWidth="6" />
					<line x1="45%" y1="78%" x2="50%" y2="85%" stroke="blue" strokeWidth="6" />
					<line x1="59.5%" y1="42%" x2="73%" y2="42%" stroke="orange" strokeWidth="6" />
					<line x1="69%" y1="36%" x2="69%" y2="48%" stroke="orange" strokeWidth="6" />
					<line x1="72%" y1="38%" x2="69%" y2="42%" stroke="orange" strokeWidth="6" />
					<line x1="72%" y1="46%" x2="69%" y2="42%" stroke="orange" strokeWidth="6" />
					<line x1="59.5%" y1="42%" x2="46%" y2="42%" stroke="orange" strokeWidth="6" />
					<line x1="50%" y1="36%" x2="50%" y2="48%" stroke="orange" strokeWidth="6" />
					<line x1="47%" y1="38%" x2="50%" y2="42%" stroke="orange" strokeWidth="6" />
					<line x1="47%" y1="46%" x2="50%" y2="42%" stroke="orange" strokeWidth="6" />
					<line x1="59.5%" y1="28%" x2="59%" y2="63%" stroke="yellow" strokeWidth="6" />
					<circle cx="59.5%" cy="20%" r="8%" stroke="red" strokeWidth="6" />					
				</g>
			);
			break;

		case "easy-game-lost":
			hangedMan = (
				<g>
					<line x1="59%" y1="63%" x2="69%" y2="85%" stroke="green" strokeWidth="6" />
					<line x1="74%" y1="78%" x2="69%" y2="85%" stroke="blue" strokeWidth="6" />
					<line x1="59%" y1="63%" x2="50%" y2="85%" stroke="green" strokeWidth="6" />
					<line x1="45%" y1="78%" x2="50%" y2="85%" stroke="blue" strokeWidth="6" />
					<line x1="59.5%" y1="42%" x2="73%" y2="42%" stroke="orange" strokeWidth="6" />
					<line x1="69%" y1="36%" x2="69%" y2="48%" stroke="orange" strokeWidth="6" />
					<line x1="72%" y1="38%" x2="69%" y2="42%" stroke="orange" strokeWidth="6" />
					<line x1="72%" y1="46%" x2="69%" y2="42%" stroke="orange" strokeWidth="6" />
					<line x1="59.5%" y1="42%" x2="46%" y2="42%" stroke="orange" strokeWidth="6" />
					<line x1="50%" y1="36%" x2="50%" y2="48%" stroke="orange" strokeWidth="6" />
					<line x1="47%" y1="38%" x2="50%" y2="42%" stroke="orange" strokeWidth="6" />
					<line x1="47%" y1="46%" x2="50%" y2="42%" stroke="orange" strokeWidth="6" />
					<line x1="59.5%" y1="28%" x2="59%" y2="63%" stroke="yellow" strokeWidth="6" />
					<circle cx="59.5%" cy="20%" r="8%" stroke="red" strokeWidth="6" />					
					<line x1="58%" y1="18%" x2="56%" y2="15%" stroke="red" strokeWidth="6" />
					<line x1="56%" y1="18%" x2="58%" y2="15%" stroke="red" strokeWidth="6" />
					<line x1="63%" y1="18%" x2="61%" y2="15%" stroke="red" strokeWidth="6" />
					<line x1="61%" y1="18%" x2="63%" y2="15%" stroke="red" strokeWidth="6" />
					<line x1="56%" y1="24%" x2="63%" y2="24%" stroke="red" strokeWidth="6" />
				</g>
			);
			break;
		
		case "hard4":
			hangedMan = (
				<g>
					<line x1="59.5%" y1="42%" x2="69%" y2="42%" stroke="orange" strokeWidth="6" />
					<line x1="59.5%" y1="42%" x2="50%" y2="42%" stroke="orange" strokeWidth="6" />
					<line x1="59.5%" y1="28%" x2="59%" y2="63%" stroke="yellow" strokeWidth="6" />
					<circle cx="59.5%" cy="20%" r="8%" stroke="red" strokeWidth="6" />					
				</g>
			);
			break;

		case "hard5":
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

		case "hard6":
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

		case "hard-game-lost":
			hangedMan = (
				<g>
					<line x1="59%" y1="63%" x2="69%" y2="85%" stroke="green" strokeWidth="6" />
					<line x1="59%" y1="63%" x2="50%" y2="85%" stroke="green" strokeWidth="6" />
					<line x1="59.5%" y1="42%" x2="69%" y2="42%" stroke="orange" strokeWidth="6" />
					<line x1="59.5%" y1="42%" x2="50%" y2="42%" stroke="orange" strokeWidth="6" />
					<line x1="59.5%" y1="28%" x2="59%" y2="63%" stroke="yellow" strokeWidth="6" />
					<circle cx="59.5%" cy="20%" r="8%" stroke="red" strokeWidth="6" />
					<line x1="58%" y1="18%" x2="56%" y2="15%" stroke="red" strokeWidth="6" />
					<line x1="56%" y1="18%" x2="58%" y2="15%" stroke="red" strokeWidth="6" />
					<line x1="63%" y1="18%" x2="61%" y2="15%" stroke="red" strokeWidth="6" />
					<line x1="61%" y1="18%" x2="63%" y2="15%" stroke="red" strokeWidth="6" />
					<line x1="56%" y1="24%" x2="63%" y2="24%" stroke="red" strokeWidth="6" />
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
					<circle cx="79.5%" cy="35%" r="8%" stroke="black" strokeWidth="6" />
					<circle cx="79.5%" cy="36%" r="4%" stroke="red" strokeWidth="4" />
					<rect width="20%" height="15%" x="69%" y="22%" stroke="black" fill="black" />
					<circle cx="79.5%" cy="35%" r="8%" stroke="red" strokeWidth="6" fill="transparent" />
					<circle cx="77.5%" cy="33%" r="1.5%" stroke="red" strokeWidth="4" />
					<circle cx="81.5%" cy="33%" r="1.5%" stroke="red" strokeWidth="4" />
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
				<rect width="30%" height="99%" x="30%" y="1%" stroke="#F9CC9D" fill="#F9CC9D" />
				<rect width="28%" height="97%" x="31%" y="3%" stroke="black" fill="black" />
				<rect width="6%" height="85%" x="55%" y="15%" stroke="black" fill="black" />
				<line x1="15%" y1="100%" x2="45%" y2="100%" strokeWidth="30" stroke="#F9CC9D" />
				{hangedMan}
			</svg>
		</div>
	)
}

export default Gallows;

