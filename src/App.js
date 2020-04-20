import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import styled from "styled-components";

const StyledButton = styled.button`
    background-color: ${props => (props.alt ? "red" : "green")};
    font: inherit;
    color: white;
    border: 1px solid White;
    padding: 8px;
    cursor: pointer;

    &:hover {
        background-color: ${props => {
            return props.alt ? "salmon" : "lightgreen";
        }};
        color: black;
    }
`;

class App extends Component {
    state = {
        persons: [
            {
                id: 1,
                name: "Viral",
                age: "20",
            },
            {
                id: 2,
                name: "Shastri",
                age: "20",
            },
            {
                id: 3,
                name: "Manish",
                age: "50",
            },
        ],
        otherState: "Cricket",
        showPersons: false,
    };

    deletePerson = index => {
        // const persons = this.state.persons.slice();
        const persons = [...this.state.persons];
        persons.splice(index, 1);
        this.setState({ persons: persons });
    };

    personToggler = () => {
        const doesShow = this.state.showPersons;
        this.setState({
            showPersons: !doesShow,
        });
    };

    switchNameHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });
        const person = { ...this.state.persons[personIndex] };
        //const person = Object.assign({}, this.state.persons[personIndex]);
        person.name = event.target.value;
        const persons = [...this.state.persons];
        persons[personIndex] = person;
        this.setState({ persons: persons });
    };

    render() {
        // const style = {
        //     backgroundColor: "Green",
        //     font: "inherit",
        //     color: "white",
        //     border: "1px solid White",
        //     padding: "8px",
        //     cursor: "pointer",
        //     ":hover": {
        //         backgroundColor: "lightgreen",
        //         color: "black",
        //     },
        // };

        let persons = null;
        let button = (
            <StyledButton
                alt={this.state.showPersons}
                onClick={this.personToggler}
            >
                Show Cards
            </StyledButton>
        );

        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return (
                            <Person
                                click={() => this.deletePerson(index)}
                                name={person.name}
                                age={person.age}
                                key={person.id}
                                changed={event => {
                                    this.switchNameHandler(event, person.id);
                                }}
                            />
                        );
                    })}
                </div>
            );
            // style.backgroundColor = "Red";
            // style[":hover"] = {
            //     backgroundColor: "salmon",
            //     color: "black",
            // };

            button = (
                <StyledButton
                    alt={this.state.showPersons}
                    onClick={this.personToggler}
                >
                    Hide Cards
                </StyledButton>
            );
        }

        const classes = [];
        if (this.state.persons.length <= 2) {
            classes.push("red");
        }
        if (this.state.persons.length <= 1) {
            classes.push("bold");
        }

        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <p className={classes.join(" ")}>This is really working!</p>
                {persons}
                {button}
            </div>
        );
    }
}

export default App;

// import React, { useState } from "react";
// import "./App.css";
// import Person from "./Person/Person";

// const app = props => {
//     const [personCurrentState, setPersonState] = useState({
//         persons: [
//             {
//                 name: "Viral",
//                 age: "20",
//             },
//             {
//                 name: "Shastri",
//                 age: "02",
//             },
//         ],
//     });

//     const switchNameHandler = () => {
//         setPersonState({
//             persons: [
//                 {
//                     name: "Shastri",
//                     age: "20",
//                 },
//                 {
//                     name: "Viral",
//                     age: "02",
//                 },
//             ],
//         });
//     };
//     return (
//         <div className="App">
//             <p>I know that Mothefucke</p>
//             <button onClick={switchNameHandler}>Switch Name</button>
//             <Person
//                 name={personCurrentState.persons[0].name}
//                 age={personCurrentState.persons[0].age}
//             />

//             <Person
//                 name={personCurrentState.persons[1].name}
//                 age={personCurrentState.persons[1].age}
//             >
//                 Hobbie : Coding
//             </Person>
//         </div>
//     );
// };

// export default app;

// Render()

/* <Person
name={this.state.persons[0].name}
age={this.state.persons[0].age}
changed={this.printName}
/>
<Person
name={this.state.persons[1].name}
age={this.state.persons[1].age}
click={this.switchChildHandler.bind(this, "Tennis")}
>
{this.state.otherState}
</Person> */

//  --- JSX TO JS COMPLIED CODE ---
//  React.createElement(
//  "div",
//    { className: "App" },
//  React.createElement("p", null, "I know that Mothefucke")
//   )

// Class Methods

// switchNameHandler = newName => {
//     // console.log('Was clicked!');
//     // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
//     this.setState({
//         persons: [
//             {
//                 name: this.state.persons[1].name,
//                 age: this.state.persons[1].age,
//             },
//             {
//                 name: this.state.persons[0].name,
//                 age: this.state.persons[0].age,
//             },
//         ],
//     });
// };

// switchChildHandler = newHobbie => {
//     this.setState({
//         otherState: newHobbie,
//     });
// };
