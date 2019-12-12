import React from 'react';
import classes from './Card.module.css';

const card = props => {
  let classList = [classes.Card];
  if (props.type === 'Login') {
    classList.push(classes.Login);
  }
  return <div className={classList.join(' ')} style={props.styleObj}>{props.children}</div>;
};

export default card;
