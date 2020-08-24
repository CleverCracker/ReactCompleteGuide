import React from 'react';
import classes from './Person.module.css';

const person = (props) => {
  return (
    <div className={classes.Person}>
      <p onClick={props.clickFn}>
        I'm {props.name} And {props.age} Old
      </p>
      <p>{props.children}</p>
      <input type='text' onChange={props.changedFn} value={props.name} />
    </div>
  );
};

export default person;
