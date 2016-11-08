import React from 'react';
import './NewGame.css';

const NewGame = ({newGame}) => (
	<div className="newGame">
		<button
			onClick={()=>{
				console.log('new game clicked');
				newGame();
			}
		}>
			New Game
		</button>
	</div>
);

export default NewGame;
