import React from 'react';
import classes from './MudLogger.module.css';

export const MudLogger = () => {
  const mudLoggerItem = [
    { parameter: 'PVT high/low alarm', value: '<5%' },
    { parameter: 'Flow-show high/low alarm', value: '>5%' }
  ];

  const mudLoggerChecklist = mudLoggerItem.map((item, index) => (
    <li key={index} className={classes.MudLogger}>
      <p>{item.parameter}</p>
      <strong>{item.value}</strong>
    </li>
  ));

  return <ul>{mudLoggerChecklist}</ul>;
};

export default MudLogger;
