import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './Navbar.module.css';

export default class Navbar extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return (
      <div className={classes.Navbar} id='navbar'>
        <ul className={classes.NavTabs} role='tablist'>
          <li className={[classes.NavItem, classes.Active].join(' ')}>
            <a
              id='Procedures-tab'
              data-toggle='tab'
              href='#Procedures'
              role='tab'
              aria-controls='Procedures'
              aria-selected='true'
            >
              Procedures
            </a>
          </li>
          <li className={classes.NavItem}>
            <a
              id='eForms-tab'
              data-toggle='tab'
              href='#eForms'
              role='tab'
              aria-controls='e-Forms'
              aria-selected='true'
            >
              e-Forms
            </a>
          </li>
          <li className={classes.NavItem}>
            <a
              id='JBD-tab'
              data-toggle='tab'
              href='#JBD'
              role='tab'
              aria-controls='JBD'
              aria-selected='false'
            >
              JBD
            </a>
          </li>
          <li className={classes.NavItem}>
            <a
              id='Pic-tab'
              data-toggle='tab'
              href='#Pic'
              role='tab'
              aria-controls='Pic'
              aria-selected='false'
            >
              Pic/Vid
            </a>
          </li>
          <li className={classes.NavItem}>
            <a
              id='MOC-tab'
              data-toggle='tab'
              href='#MOC'
              role='tab'
              aria-controls='MOC'
              aria-selected='false'
            >
              MOC
            </a>
          </li>
          <li className={classes.NavItem}>
            <a
              id='linked-tab'
              data-toggle='tab'
              href='#linked'
              role='tab'
              aria-controls='setting'
              aria-selected='false'
            >
              Lined Procedures
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
