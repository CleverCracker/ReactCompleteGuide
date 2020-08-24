import React from 'react';
import classes from './Cockpit.module.scss';
const Cockpit = (props) => {
  const assignClasses = [];
  let btnClass = '';
  if (props.showPersons) {
    btnClass = classes.red;
  } else {
    btnClass = classes.green;
  }
  if (props.persons.length <= 2) {
    assignClasses.push(classes.text_red);
  }
  if (props.persons.length <= 1) {
    assignClasses.push(classes.text_weight_bold);
  }
  return (
    <div className={classes.Cockpit}>
      <h1>WeLcome to React App</h1>
      <p className={assignClasses.join(' ')}>This is Really Working...!</p>
      <button
        onClick={props.clicked}
        type='button'
        className={classes.btn + ' ' + btnClass}
      >
        Toggle Persons
      </button>
    </div>
  );
};

export default Cockpit;
