import React from "react";
import styled from "styled-components";
import "./Person.css";

const StyledDiv = styled.div`
    width: 30%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;

    @media (min-width: 500px) {
        width: 450px;
    }
`;

const person = props => {
    return (
        <StyledDiv>
            <input type="text" onChange={props.changed} value={props.name} />
            <p onClick={props.click}>
                Name: {props.name} Age: {props.age}
            </p>
            {/* <p onClick={props.click}>{props.children}</p> */}
        </StyledDiv>
    );
};

export default person;

// const style = {
//     "@media (min-width: 500px)": {
//         width: "450px",
//     },
// };
