import React, { Component } from 'react';
import classes from './Input.module.css';

export default class Input extends Component {
  render() {
    return (
      <div className='form-group'>
        <input
          className={classes.Input}
          type='text'
          placeholder={this.props.label}
        />
      </div>
    );
  }
}
