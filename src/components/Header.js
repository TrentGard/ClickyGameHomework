import React, { Component } from 'react';
import GuessMessage from './HeaderChildren/GuessMessage';
import ScoreKeeper from './HeaderChildren/ScoreKeeper';

class Header extends Component {
	render () {
		return (
			<div>
				<navbar>
					<ul>
						<li>Clicky Game!</li>
						<li><GuessMessage message={this.props.headerMessage} /></li>
						<li><ScoreKeeper score={this.props.}

			</div>
		)
	}
}

export default Header;