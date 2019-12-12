import React from 'react';
import classes from './Checkbox.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

class Checkbox extends React.Component {
  static defaultProps = {
    checked: false,
    disabled: false
  };
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
    const { disabled } = this.props;
    const { checked } = this.state;
    return (
      <div className={classes.CheckboxContainer}>
        <label>
          <input
            type='checkbox'
            className={classes.Checkbox}
            checked={checked}
            disabled={disabled}
            onChange={this._handleChange}
          />
          <FontAwesomeIcon
            className={classes.Checked}
            style={{ fontSize: '26px', color: '#005595' }}
            icon='check-square'
          />
        </label>
      </div>
    );
  }
}

Checkbox.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool
};

export default Checkbox;
