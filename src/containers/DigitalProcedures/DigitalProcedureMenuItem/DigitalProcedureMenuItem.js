import React from 'react';
import classes from './DigitalProcedureMenuItem.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { withRouter } from 'react-router-dom';

export const DigitalProcedureMenuItem = props => {
  let menuItemClass = [classes.DigitalProcedureMenuItem];
  if (props.active) {
    menuItemClass.push(classes.Active);
  }
  const onMenuSelected = title => {
    switch (title) {
      case 'Daily Checklist':
        props.history.push('/dailychecklist');
        break;
      case 'Daily Instructions':
        props.history.push('/dailyinstruction');
        break;

      default:
        break;
    }
    console.log(title);
  };
  return (
    <React.Fragment>
      <div
        className={classes.MenuContainer}
        onClick={() => onMenuSelected(props.title)}
      >
        <div className={menuItemClass.join(' ')}>
          <FontAwesomeIcon
            className={classes.MenuIcon}
            icon={props.icon}
            size='3x'
          />
        </div>
        <label className={classes.MenuLabel}> {props.title}</label>
      </div>
    </React.Fragment>
  );
};

export default withRouter(DigitalProcedureMenuItem);
