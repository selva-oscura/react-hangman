import React from 'react';
import './Header.css';

const Header = ({scores}) => (
	<div className="header">
		<h2>The Pen is Mightier than the Sword</h2>
		<h3>But Watch Out for the Hangman</h3>
		<div className="left">
			<h4>
				Hanged<br />
				{scores.hangman}
			</h4>
		</div>
		<div className="right">
			<h4>
				Saved<br />
					{scores.player}
			</h4>
		</div>
	</div>
);

export default Header;