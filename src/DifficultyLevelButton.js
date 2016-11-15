import React from 'react';
import './DifficultyLevelButton.css';

const DifficultyLevelButton = ({level, currentDifficultyLevel, updateDifficultyLevel}) => {
	var classParams;
	if(level===currentDifficultyLevel){
		classParams = "difficultyLevel selected";
	}else{
		classParams = "difficultyLevel";
	}
	return (
		<button 
			className={classParams}
			onClick={()=>{
				updateDifficultyLevel(level)
			}
		}>
			{level}
		</button>
	)
};

export default DifficultyLevelButton;