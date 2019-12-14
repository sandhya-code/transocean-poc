import React, { Component } from 'react';
import Checkbox from '../../../../components/UI/Form/Checkbox/Checkbox';
import classes from './StepCheckListItem.module.css';

class StepCheckListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.count,
      item: props.item,
      isDisabled: props.isDisabled
    };
  }

  checkBox = item => {
    let checkbox = null;
    if (item.isCheckbox) {
      checkbox = (
        <Checkbox
          disabled={this.props.isDisabled || item.role === 'Assistant Driller'}
        ></Checkbox>
      );
    }
    return checkbox;
  };
  render() {
    const { count, item } = this.state;
    const classList = [classes.StepCheckListItem];
    if (this.state.isDisabled || item.role === 'Assistant Driller') {
      classList.push(classes.Disabled);
    }
    return (
      <li className={classList.join(' ')} key={count}>
        <span className={classes.Count}>{count}</span>
        <span className={classes.Role}>{item.role}</span>
        <span className={classes.Text}>{item.text}</span>
        <span className={classes.Checkbox}>{this.checkBox(item)}</span>
      </li>
    );
  }
}

export default StepCheckListItem;
