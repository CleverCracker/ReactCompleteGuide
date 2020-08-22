import React from 'react';

const person = (props) => {
  return (
    <div>
      <p onClick={props.clickFn}>I'm {props.name}</p>
      <p>{props.children}</p>
    </div>
  );
};

export default person;
