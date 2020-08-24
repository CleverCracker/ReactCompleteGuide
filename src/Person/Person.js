import React from 'react';
import './Person.scss';
import Radium from 'radium';

const person = (props) => {
  const style = {
    '@media (min-width:700px)': {
      width: '650px',
    },
  };
  return (
    <div className='Person' style={style}>
      <p onClick={props.clickFn}>
        I'm {props.name} And {props.age} Old
      </p>
      <p>{props.children}</p>
      <input type='text' onChange={props.changedFn} value={props.name} />
    </div>
  );
};

export default Radium(person);
