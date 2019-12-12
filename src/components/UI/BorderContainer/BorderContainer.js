import React from 'react';
import classes from './BorderContainer.module.css';

const borderContainer = props => (
  <div className={classes.Border} style={props.styleObj}>
    {props.children}
  </div>
);

export default borderContainer;
