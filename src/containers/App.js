import classes from './App.module.css';
import React, { Component } from 'react';
import Persons from '../components/Perosns/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

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

    if (this.state.showPerson) {
      person = (
        <Persons
          persons={this.state.persons}
          clickedFn={this.deletePersonHandler}
          changedFn={this.nameChangeHandler}
        />
      );
    }

    return (
      <div className={classes.App}>
        <Cockpit
          persons={this.state.persons}
          showPerson={this.state.showPerson}
          clicked={this.togglePersonHandler}
        />
        {person}
      </div>
    );
  }
}
export default App;
