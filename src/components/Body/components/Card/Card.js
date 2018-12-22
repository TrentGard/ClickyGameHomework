import React from "react";
import "./Card.css";

const Card = props => (
    <div className="card-container">
        <div>
            {props.name}
        </div>
        <img src={props.image} className="card-image" onClick={props.handleClick} />
    </div>
);

export default Card;