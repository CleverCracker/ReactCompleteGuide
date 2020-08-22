import './App.css';
import Person from './Person/Person';

import React, { Component, useState } from 'react';

/* ! React Using Class REDUX i think */
/* export default class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 22 },
      { name: 'Clever', age: 21 },
      { name: 'Cracker', age: 7 },
    ],
  };

  switchNameHandler = () => {
    console.log('CLicked');
    this.setState({
      persons: [
        { name: 'Malika', age: 29 },
        { name: 'Aina', age: 18 },
        { name: 'Hina', age: 8 },
      ],
    });
  };
  render() {
    return (
      <div className='App'>
        <h1>WeLcome to React App</h1>
        <button
          onClick={this.switchNameHandler}
          type='button'
          className='btn btn-primary'
        >
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        >
          Person Chidren
        </Person>
      </div>
    );
  }
}
 */
/* React Using Function REACT HOOK */
/* const App = (props) => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Max', age: 22 },
      { name: 'Clever', age: 21 },
      { name: 'Cracker', age: 7 },
    ],
  });

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        { name: 'Malika', age: 29 },
        { name: 'Aina', age: 18 },
        { name: 'Hina', age: 8 },
      ],
    });
  };
  return (
    <div className='App'>
      <h1>WeLcome to React App</h1>
      <button
        onClick={switchNameHandler}
        type='button'
        className='btn btn-primary'
      >
        Switch Name
      </button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      />
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      >
        Person Chidren
      </Person>
    </div>
  );
};
export default App;
 */
