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
			<h4>{level}</h4>
		</button>
	)
};

export default DifficultyLevelButton;