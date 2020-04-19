import React from "react";
import "./Person.css";

const person = props => {
    return (
        <div className="Person">
            <input onChange={props.changed} value={props.name} />
            <p>
                Name: {props.name} Age: {props.age}
            </p>
            <p onClick={props.click}>{props.children}</p>
        </div>
    );
};

export default person;
