import React, { Component } from 'react';
import classes from './CollapsableStep.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import OpenIcon from '../../../../assets/Icon/open.svg';

export default class CollapsableStep extends Component {
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
      <div className={classes.ProcedureStep}>
        <input
          id={'ProcedureStep' + this.props.id}
          className={classes.ToggleControl}
          onChange={this._handleChange}
          type='checkbox'
          checked={checked}
        />
        <label
          htmlFor={'ProcedureStep' + this.props.id}
          className={classes.ProcedureStepHeader}
        >
          <div className={classes.ProcedureStepHeaderContainer}>
            <div className={classes.Number}>{this.props.stageNumber}</div>
            <div className={classes.Icon}>
              <img src={OpenIcon} alt='Open'></img> 
            </div>
            <div className={classes.Text}>
              <label className={classes.StepLable}>
                {this.props.procedureTitle}
              </label>
              <label className={classes.StepStatus}>
                {this.props.procedureStatus}
              </label>
            </div>
          </div>
          <FontAwesomeIcon
            className={classes.Open}
            icon='chevron-circle-down'
            style={{ marginRight: '5px', float: 'right' }}
            size='2x'
          />
          <FontAwesomeIcon
            className={classes.Collapse}
            icon='chevron-circle-up'
            style={{ marginRight: '5px', float: 'right' }}
            size='2x'
          />
        </label>
        <div className={classes.ProcedureStepBody}>
          <div className={classes.ProcedureStepContent}>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
