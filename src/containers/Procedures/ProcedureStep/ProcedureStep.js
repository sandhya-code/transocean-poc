import React, { Component } from 'react';
import classes from './ProcedureStep.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import OpenIcon from '../../../assets/Icon/open.svg';
const alphaCount = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p'
];
const TBT = [
  {
    checkText: 'Centralizer monitoring plan:',
    subText: [
      { checkText: 'Going through rotary' },
      { checkText: 'Hanging up on SJEs' },
      { checkText: 'Passing through PCM tail in arm' },
      { checkText: 'Passing through HR arms' },
      { checkText: 'Stacking weight downhole (BOP, casing window, etc.)' }
    ]
  },
  {
    checkText:
      'Raising casing joint off of skate without capturing it in the PCM tail in arm'
  },
  {
    checkText:
      'Slings / handling gear of the SJEs getting caught while lifting and lowering  theTD (skate tracks, slips, etc.)'
  },
  {
    checkText:
      'Communication protocols for opening / closing of slips / elevators and the transferring of weight'
  },
  {
    checkText: 'Internals of casing elevators hanging up on box end of casing'
  },
  {
    checkText:
      'Collision point between casing in PRS and casing elevators while hoisting / lowering TDS'
  },
  {
    checkText: 'Service loop monitoring plan'
  }
];
export default class ProcedureStep extends Component {
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
            <div className={classes.Number}>1</div>
            <div className={classes.Icon}>
              <img src={OpenIcon} alt='Open'></img>
            </div>
            <div className={classes.Text}>
              <label className={classes.StepLable}>
                Operational Specific Talking Points for TBT
              </label>
              <label className={classes.StepStatus}>
                Open and check to start
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
            <ul style={{ listStyle: 'none' }}>
              {TBT.map((item, index) => {
                let subItems = null;
                if (item.subText) {
                  subItems = item.subText.map((item, index) => (
                    <li key={index}>
                      <span>{alphaCount[index]}) </span>
                      {item.checkText}
                    </li>
                  ));

                  subItems = (
                    <ul style={{ marginLeft: '20px', listStyle: 'none' }}>
                      {subItems}
                    </ul>
                  );
                }

                return (
                  <React.Fragment>
                    <li key={index}>
                      <span>{index + 1}) </span>
                      {item.checkText}
                    </li>
                    {subItems}
                  </React.Fragment>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
