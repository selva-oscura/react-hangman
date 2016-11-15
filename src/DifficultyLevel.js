import React from 'react';
import DifficultyLevelButton from './DifficultyLevelButton';

const DifficultyLevel = ({difficultyLevel, updateDifficultyLevel}) => {
	const buttonSpecs = ["easy", "hard"];
	const buttons = buttonSpecs.map((level, i) => (
		<DifficultyLevelButton  
			key={i}
			level={level}
			stateDifficultyLevel={difficultyLevel}
			updateDifficultyLevel={updateDifficultyLevel}
		/>
	));
	return(
		<div className="difficultyLevel">
			<p>
				Select Level:
			</p>
			{buttons}
		</div>
	)
}

export default DifficultyLevel;