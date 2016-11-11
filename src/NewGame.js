import React from 'react';
import './NewGame.css';

const NewGame = ({newGame}) => (
	<div className="newGame">
		<button
			onClick={()=>{
				newGame();
			}
		}>
			New Game
		</button>
	</div>
);

export default NewGame;
