import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Checkbox from '../../../../../components/UI/Form/Checkbox/Checkbox';
import classes from './ProcedureCheckList.module.css';

class ProcedureCheckList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.count,
      item: props.item
    };
  }

  checkBox = item => {
    let checkbox = null;
    if (item.isCheckbox) {
      checkbox = <Checkbox></Checkbox>;
    }
    return checkbox;
  };

  render() {
    console.log(this.state.item);
    const { count, item } = this.state;
    return (
      <li className={classes.ProcedureCheckList} key={count}>
        <span>
          {count + `)`} {item.text}
        </span>

        {this.checkBox(item)}
      </li>
    );
  }
}

ProcedureCheckList.propTypes = {
  item: PropTypes.shape({
    count: PropTypes.string,
    item: PropTypes.shape({
      text: PropTypes.string,
      isCheckbox: PropTypes.bool,
      isChecked: PropTypes.bool
    })
  })
};

export default ProcedureCheckList;
