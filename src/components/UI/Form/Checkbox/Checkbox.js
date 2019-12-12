import React from 'react';
import classes from './Checkbox.module.css';

export const Checkbox = () => {
  return (
    <div className={classes.Checkbox}>
      <input type='checkbox' />
      <div className={classes.CheckboxVisible}></div>
    </div>
  );
};

export default Checkbox;
