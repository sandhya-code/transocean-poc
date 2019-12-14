import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ProcedureCheckLists from '../ProcedureCheckLists/ProcedureCheckLists';
import CollapsableStep from '../CollapsableStep/CollapsableStep';
import StepCheckListItem from '../StepCheckListItem/StepCheckListItem';
import Button from '../../../../components/UI/Button/Button';
import {
  PreRunningShoeTrack,
  ShoeTrackSteps,
  alphaCount
} from '../../../../constants/Procedures.Constant';
import classes from './ShoeTrack.module.css';

export class ShoeTrack extends Component {
  constructor(props) {
    super(props);
    this.state = {
      procedureTitle: 'Make Up Shoe Track',
      procedureStatus: 'Open and check to start',
      checklists: PreRunningShoeTrack,
      steps: ShoeTrackSteps
    };
  }
  onRunNextCycle = () => {
    console.log('onRunNextCycle');
  };

  shoeTrackStep = (shoeTrackStep, index) => {
    return shoeTrackStep.map((step, _key) => {
      const count = alphaCount[_key];
      return (
        <StepCheckListItem
          count={`${index + 1}${count} `}
          item={step}
          isDisabled={false}
        ></StepCheckListItem>
      );
    });
  };
  shoeTrackSteps = (shoeTrackStep, index) => {
    return (
      <React.Fragment>
        <p className={classes.StepHeader}>
          {index + 1} - {shoeTrackStep.title}
        </p>
        <ul>{this.shoeTrackStep(shoeTrackStep.steps, index)}</ul>
      </React.Fragment>
    );
  };
  render() {
    const { procedureTitle, procedureStatus, checklists } = this.state;

    return (
      <CollapsableStep
        id='shoeTrack'
        stageNumber={'2'}
        procedureTitle={procedureTitle}
        procedureStatus={procedureStatus}
      >
        <ProcedureCheckLists checklists={checklists}></ProcedureCheckLists>
        <div className={classes.StepContainer}>
          <div>
            {this.state.steps.map((step, index) => {
              return this.shoeTrackSteps(step, index);
            })}
          </div>
          <div className={classes.ButtonFooter}>
            <Button
              btnType='Primary'
              clicked={this.onRunNextCycle}
              style={{ marginRight: '8px' }}
            >
              <span>Run Next Single</span>
              <FontAwesomeIcon icon='sync-alt' style={{ marginLeft: '5px' }} />
            </Button>
            <Button btnType='Success'>
              <span>Shoetrack Complete</span>
              <FontAwesomeIcon
                icon='check-circle'
                style={{ marginLeft: '5px' }}
              />
            </Button>
          </div>
        </div>
      </CollapsableStep>
    );
  }
}

export default ShoeTrack;
