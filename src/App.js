import './App.css';
import Person from './Person/Person';

import React, { Component } from 'react';

export default class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 22 },
      { name: 'Clever', age: 21 },
      { name: 'Cracker', age: 7 },
    ],
    showPerson: false,
  };
  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };
  togglePersonHandler = () => {
    const isShow = this.state.showPerson;
    this.setState({ showPerson: !isShow });
  };
  render() {
    /* Style Btn Using Js */
    const btnStyle = {
      padding: '.5rem .75rem',
      border: 'none',
      outline: 'none',
      background: '#A44A0A',
      color: 'white',
      cursor: 'pointer',
      borderRadius: '.25rem',
    };
    /* Rendering Persing IN REnder Method Out Side Return */
    let person = null;
    if (this.state.showPerson) {
      person = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                clickFn={() => this.deletePersonHandler(index)}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className='App'>
        <h1>WeLcome to React App</h1>
        <button
          onClick={this.togglePersonHandler}
          type='button'
          style={btnStyle}
        >
          Toggle Persons
        </button>
        {person}
      </div>
    );
  }
}
