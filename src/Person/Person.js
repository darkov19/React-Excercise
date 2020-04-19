import React from "react";
import "./Person.css";
const person = props => {
    return (
        <div className="Person">
            <input type="text" onChange={props.changed} value={props.name} />
            <p onClick={props.click}>
                Name: {props.name} Age: {props.age}
            </p>
            {/* <p onClick={props.click}>{props.children}</p> */}
        </div>
    );
};

export default person;
