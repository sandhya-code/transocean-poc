import React from 'react';
import classes from './Sidebar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Sidebar = () => {
  return (
    <div className={classes.Sidebar}>
      <ul className={classes.NavList}>
        <li className={classes.Active}>
          <FontAwesomeIcon
            icon='chevron-right'
            style={{ marginRight: '8px' }}
          />
          Casing
        </li>
        <li style={{ paddingLeft: '38px' }}>Cementing</li>
        <li style={{ paddingLeft: '38px' }}>Drilling</li>
      </ul>
    </div>
  );
};

export default Sidebar;
