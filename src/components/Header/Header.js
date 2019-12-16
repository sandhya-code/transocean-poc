import React from 'react';
import Card from '../UI/Card/Card';
import classes from './Header.module.css';
const header = props => {
  const getDate = (type = 'cur') => {
    const today = new Date();
    if (type === 'prev') {
      today.setDate(today.getDate() - 1);
    }
    const dayArr = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ];
    const monthArr = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ];
    const curDate =
      dayArr[today.getDay()] +
      ', ' +
      today.getDate() +
      ' ' +
      monthArr[today.getMonth()];
    return curDate;
  };
  return (
    <Card>
      <div className={classes.Header}>
        <div>
          <h2 className={classes.Heading}>Deepwater Conqueror</h2>
          <p className={classes.SubmittedBy}>
            Submitted by: <strong>{props.submittedByUser}</strong>,{' '}
            {props.submittedByRole}, {getDate()}, 6:00 am
          </p>
        </div>
        <div>
          <p>
            <strong>{getDate()}</strong>
          </p>
        </div>
      </div>
    </Card>
  );
};

export default header;
