import React from "react";
import Radium from "radium";
import "./Person.css";
const person = props => {
    const style = {
        "@media (min-width: 500px)": {
            width: "450px",
        },
    };
    return (
        <div className="Person" style={style}>
            <input type="text" onChange={props.changed} value={props.name} />
            <p onClick={props.click}>
                Name: {props.name} Age: {props.age}
            </p>
            {/* <p onClick={props.click}>{props.children}</p> */}
        </div>
    );
};

export default Radium(person);
