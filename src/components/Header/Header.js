import React from 'react';
import Card from '../UI/Card/Card';
import classes from './Header.module.css';
const header = props => {
  return (
    <Card>
      <div className={classes.Header}>
        <h2 className={classes.Heading}>Deepwater Conqueror</h2>
        <p className={classes.SubmittedBy}>
          Submitted by: <strong>{props.submittedByUser}</strong>,{' '}
          {props.submittedByRole}, {props.submittedByTimeStamp}
        </p>
      </div>
    </Card>
  );
};

export default header;
