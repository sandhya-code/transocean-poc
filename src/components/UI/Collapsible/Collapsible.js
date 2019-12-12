import React from 'react';
import classes from './Collapsible.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Collapsible = props => {
  return (
    <div className={classes.Collapsible}>
      <input
        id={'collapsible' + props.id}
        className={classes.ToggleControl}
        type='checkbox'
      />

      <label
        htmlFor={'collapsible' + props.id}
        className={classes.CollapsibleHeader}
      >
        {props.header}
        <FontAwesomeIcon
          className={classes.Open}
          icon='chevron-circle-down'
          style={{ marginRight: '8px', float: 'right' }}
          size='lg'
        />
        <FontAwesomeIcon
          className={classes.Collapse}
          icon='chevron-circle-up'
          style={{ marginRight: '8px', float: 'right' }}
          size='lg'
        />
      </label>
      <div className={classes.CollapsibleBody}>
        <div className={classes.CollapsibleContent}>{props.children}</div>
      </div>
    </div>
  );
};

export default Collapsible;
