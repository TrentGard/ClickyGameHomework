import React from "react";

const ScoreKeeper = (props) => (

	<div className="scoreKeeper">
		<div>{`Score: ${props.score}`}</div>
		<div>{`Top Score: ${props.topScore}`}</div>
	</div>

);

export default ScoreKeeper;