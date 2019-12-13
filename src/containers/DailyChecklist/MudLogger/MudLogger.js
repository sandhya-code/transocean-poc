import React from 'react';
import classes from './MudLogger.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Collapsible from '../../../components/UI/Collapsible/Collapsible';

export const MudLogger = () => {
  const mudLoggerItem = [
    { parameter: 'PVT high/low alarm', value: '<5 %' },
    { parameter: 'Flow-show high/low alarm', value: '>5 %' }
  ];

  const mudLoggerChecklist = mudLoggerItem.map((item, index) => (
    <li key={index} className={classes.MudLogger}>
      <p>{item.parameter}</p>
      <strong>{item.value}</strong>
    </li>
  ));

  return (
    <Collapsible
      header={
        <h3 style={{ lineHeight: 1 }}>
          <FontAwesomeIcon
            icon='arrow-right'
            style={{
              marginRight: '10px',
              fontSize: '16px',
              fontWeight: 'normal'
            }}
          />
          Mud Logger
        </h3>
      }
      id='mudLogger'
    >
      <ul>{mudLoggerChecklist}</ul>
    </Collapsible>
  );
};

export default MudLogger;
