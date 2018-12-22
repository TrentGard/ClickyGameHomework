import React, { Component } from 'react';
import GuessMessage from './components/GuessMessage';
import ScoreKeeper from './components/ScoreKeeper';
import './Header.css';

const Header = props => (
	<div className="header">
		<h1>Clicky Game!</h1>
		<GuessMessage message={props.headerMessage} /> 
		<ScoreKeeper score={props.score} topScore={props.topScore} /> 

	</div>
);

export default Header;