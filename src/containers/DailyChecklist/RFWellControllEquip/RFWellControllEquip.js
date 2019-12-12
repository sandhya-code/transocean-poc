import React from 'react';
import classes from './RFWellControllEquip.module.css';
import Checkbox from '../../../components/UI/Form/Checkbox/Checkbox';
export const RFWellControllEquip = () => {
  const mudLoggerItem = [
    { parameter: 'FOS in open position?', value: true },
    { parameter: 'IBOP in open position?', value: false },
    { parameter: 'Pressure', value: false }
  ];

  const mudLoggerChecklist = mudLoggerItem.map((item, index) => (
    <li key={index} className={classes.RFWellControllEquip}>
      <p>{item.parameter}</p>
      <Checkbox></Checkbox>
    </li>
  ));

  return <ul>{mudLoggerChecklist}</ul>;
};

export default RFWellControllEquip;
