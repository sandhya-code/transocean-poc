import React, { Component } from 'react';
import classes from './DigitalProcedures.module.css';
import DigitalProcedureMenuItem from './DigitalProcedureMenuItem/DigitalProcedureMenuItem';
const MENU_ITEMS = [
  {
    title: 'Work Packs',
    icon: 'layer-group'
  },
  {
    title: 'Live View',
    icon: 'binoculars'
  },
  {
    title: 'Daily Checklist',
    icon: 'clipboard-check'
  },
  {
    title: 'Personnels',
    icon: 'users'
  },
  {
    title: 'Daily Instructions',
    icon: 'chalkboard-teacher'
  },
  {
    title: 'After Action Review',
    icon: 'clipboard'
  },
  {
    title: 'Department Logs',
    icon: 'clipboard-list'
  }
];
export default class DigitalProcedures extends Component {
  render() {
    return (
      <div className={classes.DigitalProcedures}>
        <div className='row align-items-center'>
          {MENU_ITEMS.map(menu => (
            <div className='col-3'>
              <DigitalProcedureMenuItem
                icon={menu.icon}
                title={menu.title}
              ></DigitalProcedureMenuItem>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
