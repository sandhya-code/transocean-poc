import React, { Component } from 'react';
import classes from './Collapsible.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Collapsible extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: props.checked
    };
  }
  _handleChange = () => {
    this.setState({
      checked: !this.state.checked
    });
  };
  render() {
    const { checked } = this.state;
    return (
      <div className={classes.Collapsible}>
        <input
          id={'collapsible' + this.props.id}
          className={classes.ToggleControl}
          onChange={this._handleChange}
          type='checkbox'
          checked={checked}
        />

        <label
          htmlFor={'collapsible' + this.props.id}
          className={classes.CollapsibleHeader}
        >
          {this.props.header}
          <FontAwesomeIcon
            className={classes.Open}
            icon='chevron-circle-down'
            style={{ marginRight: '5px', float: 'right' }}
            size='lg'
          />
          <FontAwesomeIcon
            className={classes.Collapse}
            icon='chevron-circle-up'
            style={{ marginRight: '5px', float: 'right' }}
            size='lg'
          />
        </label>
        <div className={classes.CollapsibleBody}>
          <div className={classes.CollapsibleContent}>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
