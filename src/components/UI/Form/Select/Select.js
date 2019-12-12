import React from 'react';
import classes from './Select.module.css';

const Select = props => {
  const onValueChanged = event => {
    props.selectedValueChanged(event);
  };
  return (
    <select
      className={classes.Select}
      value={props.selectedValue}
      onChange={event => onValueChanged(event)}
    >
      {props.options.map((item, index) => (
        <option key={index} value={item.value}>
          {item.text}
        </option>
      ))}
    </select>
  );
};

export default Select;
