import React, { Component } from 'react';
import classes from './Navbar.module.css';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'Procedures'
    };
  }

  onNavChange = curSelection => {
    this.setState({ activeTab: curSelection });
    this.props.onNavChanged(curSelection);
  };

  render() {
    const { activeTab } = this.state;
    return (
      <div className={classes.Navbar} id='navbar'>
        <ul className={classes.NavTabs} role='tablist'>
          <li
            className={[
              classes.NavItem,
              activeTab === 'Procedures' ? classes.Active : null
            ].join(' ')}
            onClick={() => this.onNavChange('Procedures')}
          >
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
          <li
            className={[
              classes.NavItem,
              activeTab === 'eForms' ? classes.Active : null
            ].join(' ')}
            onClick={() => this.onNavChange('eForms')}
          >
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
              Linked Procedures
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
