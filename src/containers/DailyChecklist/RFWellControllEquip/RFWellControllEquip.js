import React from 'react';
import classes from './RFWellControllEquip.module.css';
import Checkbox from '../../../components/UI/Form/Checkbox/Checkbox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Collapsible from '../../../components/UI/Collapsible/Collapsible';
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

  return (
    <Collapsible
      header={
        <h3 style={{ lineHeight: 1 }}>
          <FontAwesomeIcon  icon='arrow-right' style={{ marginRight: '10px', fontSize: '16px', fontWeight: 'normal'  }} />
          RF Well Controll Equip
        </h3>
      }
      id='rfWellControllEquip'
    >
      <ul>{mudLoggerChecklist}</ul>
    </Collapsible>
  );
};

export default RFWellControllEquip;
