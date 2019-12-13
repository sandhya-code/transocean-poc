import React, { Component } from 'react';
import classes from './Select.module.css';

export default class Select extends Component {
  constructor(props) {
    super(props);

    this.state = { value: props.selectedValue };
  }
  onChange(e) {
    this.setState({
      value: e.target.value
    });
  }
  render() {
    return (
      <div>
        <select
          className={classes.Select}
          value={this.state.value}
          onChange={this.onChange.bind(this)}
        >
          {this.props.options.map((item, index) => (
            <option key={index} value={item.value}>
              {item.text}
            </option>
          ))}
        </select>
      </div>
    );
  }
}
