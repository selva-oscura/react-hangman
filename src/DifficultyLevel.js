import React from 'react';
import './DifficultyLevel.css';
import DifficultyLevelButton from './DifficultyLevelButton';

const DifficultyLevel = ({difficultyLevel, updateDifficultyLevel}) => {
	const buttonSpecs = ["easy", "hard"];
	const buttons = buttonSpecs.map((level, i) => (
		<DifficultyLevelButton  
			key={i}
			level={level}
			currentDifficultyLevel={difficultyLevel}
			updateDifficultyLevel={updateDifficultyLevel}
		/>
	));
	return(
		<div className="difficultyLevel">
			<h4>
				Select Level:
			</h4>
			{buttons}
		</div>
	)
}

export default DifficultyLevel;