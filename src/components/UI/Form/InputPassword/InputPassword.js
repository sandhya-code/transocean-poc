import React, { Component } from 'react';
import classes from './InputPassword.module.css';

export default class InputPassword extends Component {
  render() {
    return (
      <div className='form-group'>
        <input
          className={classes.InputPassword}
          id='inputText'
          type='password'
          placeholder={this.props.label}
        />
      </div>
    );
  }
}
