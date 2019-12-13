import React from 'react';
import BorderContainer from '../../../components/UI/BorderContainer/BorderContainer';
import classes from './EquipmentStatus.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const equipmentStatus = props => (
  <BorderContainer styleObj={{ minHeight: '100px' }}  >
    <div className={classes.Heading}>
      <strong>Equipment Status</strong> (Including Equipment Under Repair)
    </div>
    <p>
      <FontAwesomeIcon
        icon='check-circle'
        style={{ marginRight: '1rem', color: '#00C853' }}
      />
      Main IR is dripping hydraulic oil. Plan is to fix after cement job prior
      to POOH
    </p>
    {/* <p style={{ color: 'red' }}>
      <FontAwesomeIcon
        icon='exclamation-triangle'
        style={{ marginRight: '1rem' }}
      />
      Equipment under repair
    </p> */}
  </BorderContainer>
);

export default equipmentStatus;
