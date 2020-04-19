import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
    state = {
        persons: [
            {
                name: "Viral",
                age: "20",
            },
            {
                name: "Shastri",
                age: "02",
            },
        ],
        otherState: "Cricket",
    };

    switchNameHandler = newName => {
        // console.log('Was clicked!');
        // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
        this.setState({
            persons: [
                {
                    name: this.state.persons[1].name,
                    age: this.state.persons[1].age,
                },
                {
                    name: this.state.persons[0].name,
                    age: this.state.persons[0].age,
                },
            ],
        });
    };

    switchChildHandler = newHobbie => {
        this.setState({
            otherState: newHobbie,
        });
    };

    printName = event => {
        this.setState({
            persons: [
                {
                    name: event.target.value,
                    age: "20",
                },
                {
                    name: this.state.persons[1].name,
                    age: "02",
                },
            ],
        });
    };

    render() {
        const style = {
            backgroundColor: "White",
            font: "inherit",
            border: "1px solid black",
            padding: "8px",
            cursor: "pointer",
        };

        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <p>This is really working!</p>

                <Person
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
                </Person>

                <button
                    style={style}
                    onClick={() => this.switchNameHandler("Shastri")}
                >
                    Switch Card
                </button>
            </div>
            //  --- JSX TO JS COMPLIED CODE ---
            //  React.createElement(
            //  "div",
            //    { className: "App" },
            //  React.createElement("p", null, "I know that Mothefucke")
            //   )
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
