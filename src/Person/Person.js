import React from 'react';
import './Person.scss';

const person = (props) => {
  return (
    <div className='Person'>
      <p onClick={props.clickFn}>I'm {props.name}</p>
      <p>{props.children}</p>
      <input type='text' onChange={props.changeFn} value={props.name} />
    </div>
  );
};

export default person;
