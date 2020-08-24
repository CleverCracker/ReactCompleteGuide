import classes from './App.module.css';
import Person from './Person/Person';

import React, { Component } from 'react';

class App extends Component {
  state = {
    persons: [
      { id: '122', name: 'Max', age: 22 },
      { id: '123', name: 'Clever', age: 21 },
      { id: '125', name: 'Cracker', age: 7 },
    ],
    showPerson: false,
  };
  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => p.id === id);
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons: persons,
    });
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
    /* Rendering Persing IN REnder Method Out Side Return */
    let person = null;
    let btnClass = classes.green;

    if (this.state.showPerson) {
      person = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                key={person.id}
                name={person.name}
                age={person.age}
                clickFn={() => this.deletePersonHandler(index)}
                changedFn={(event) => this.nameChangeHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
      btnClass = classes.red;
    }
    let assignClasses = [];
    if (this.state.persons.length <= 2) {
      assignClasses.push(classes.text_red);
    }
    if (this.state.persons.length <= 1) {
      assignClasses.push(classes.text_weight_bold);
    }
    return (
      <div className={classes.App}>
        <h1>WeLcome to React App</h1>
        <p className={assignClasses.join(' ')}>This is Really Working...!</p>
        <button
          onClick={this.togglePersonHandler}
          type='button'
          className={classes.btn + ' ' + btnClass}
        >
          Toggle Persons
        </button>
        {person}
      </div>
    );
  }
}
export default App;
