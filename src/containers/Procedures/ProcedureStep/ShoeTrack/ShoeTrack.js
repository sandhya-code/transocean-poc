import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ProcedureCheckLists from '../ProcedureCheckLists/ProcedureCheckLists';
import CollapsableStep from '../CollapsableStep/CollapsableStep';
import StepCheckListItem from '../StepCheckListItem/StepCheckListItem';
import Button from '../../../../components/UI/Button/Button';
import Modal from '../../../../components/UI/Modal/Modal';
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
      steps: ShoeTrackSteps,
      showConfirmComplete: false,
      showComplete: false,
      showRunCount: false,
      runCount: 0
    };
  }

  onRunCycleHandler = () => {
    const curCount = this.state.runCount + 1;

    this.setState({
      runCount: curCount,
      showRunCount: true
    });
  };
  onRunCycleClose = () => {
    this.setState({
      showRunCount: false,
      procedureStatus: `Re-running task step (${this.state.runCount} count)`
    });
  };
  onShoetrackComplete = () => {
    this.setState({ showConfirmComplete: true });
  };
  onConfirmCompleteCloseHandler = () => {
    this.setState({ showConfirmComplete: false });
  };
  onConfirmComplete = () => {
    this.setState({ showConfirmComplete: false });
    setTimeout(() => {
      this.setState({ showComplete: true });
      setTimeout(() => {
        this.setState({ showComplete: false });
      }, 2000);
    }, 500);
  };
  onShowSubmitompleteCloseHandler = () => {
    this.setState({ showComplete: false });
  };

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
        <Modal
          show={this.state.showComplete}
          modalClosed={this.onShowSubmitompleteCloseHandler}
          style={{ top: '5%' }}
        >
          <p
            style={{
              padding: '4px 8px',
              fontWeight: '600',
              backgroundColor: '#2ecc40',
              color: '#000',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderRadius: '8px'
            }}
            onClick={this.onShowSubmitompleteCloseHandler}
          >
            <span>Successfully submitted SHOE TRACK</span>
            <span style={{ fontSize: '24px', fontWeight: 'bold' }}>x</span>
          </p>
        </Modal>
        <Modal
          show={this.state.showRunCount}
          modalClosed={this.onRunCycleClose}
          style={{ top: '5%' }}
        >
          <p
            style={{
              padding: '4px 8px',
              fontWeight: '600',
              backgroundColor: '#2ecc40',
              color: '#000',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderRadius: '8px'
            }}
            onClick={this.onRunCycleClose}
          >
            <span>
              Make Up Shoe Track - Run Count {this.state.runCount} Started
            </span>
            <span style={{ fontSize: '24px', fontWeight: 'bold' }}>x</span>
          </p>
        </Modal>
        <Modal
          show={this.state.showConfirmComplete}
          modalClosed={this.onConfirmCompleteCloseHandler}
        >
          <div className={classes.ConfirmCompletionStatus}>
            <div className='container'>
              <div className={[classes.Header, 'row'].join(' ')}>
                <h3>Confirm completion status</h3>
              </div>
              <div className='row' style={{ marginBottom: '2rem' }}>
                <div style={{ padding: '2rem' }}>
                  <h1>Hey Jack McGrath!</h1>
                  <p>
                    Are you sure you submit<strong> SHOE TRACK </strong>
                    completions status
                  </p>
                </div>
              </div>
              <div
                className='row'
                style={{
                  marginBottom: '1rem',
                  justifyContent: 'flex-end',
                  textAlign: 'right'
                }}
              >
                <Button
                  btnType='Success'
                  clicked={this.onConfirmComplete}
                  style={{ marginRight: '1.2rem' }}
                >
                  <span>Submit</span>
                  <FontAwesomeIcon
                    icon='check-circle'
                    style={{ marginLeft: '5px' }}
                  />
                </Button>
              </div>
            </div>

            <button
              className={classes.CloseButton}
              onClick={this.onConfirmCompleteCloseHandler}
            >
              <FontAwesomeIcon
                icon='times-circle'
                style={{ marginRight: '5px' }}
              />
              <span>Close</span>
            </button>
          </div>
        </Modal>
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
              clicked={this.onRunCycleHandler}
            >
              <span>Run Next Single</span>
              <FontAwesomeIcon icon='sync-alt' style={{ marginLeft: '5px' }} />
            </Button>
            <Button btnType='Success' clicked={this.onShoetrackComplete}>
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
