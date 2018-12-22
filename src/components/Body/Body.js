import React from "react";
import Card from "./components/Card";
import "./Body.css";

const Body = (props) => (
    <div className="body-container">
        <div className="cards-wrapper">
            {props.cards.map(item => {
                return (
                    <Card 
                        key={item.id}
                        name={item.name}
                        image={item.image}
                        handleClick={() => props.handleClick(item.id)}
                    />
                )
            })}
        </div>
    </div>
);

export default Body;