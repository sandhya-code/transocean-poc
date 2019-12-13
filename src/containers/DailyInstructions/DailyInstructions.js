import React, { Component } from 'react';
import classes from './DailyInstructions.module.css';
import EquipmentInstruction from '../../components/EquipmentInstruction/EquipmentInstruction';
import DailyInstructionList from '../../components/DailyInstructionList/DailyInstructionList';
import DrillingParameter from '../../components/DrillingParameter/DrillingParameter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from '../../components/Footer/Footer';
import Button from '../../components/UI/Button/Button';
import Modal from '../../components/UI/Modal/Modal';
import { withRouter } from 'react-router-dom';

class DailyInstructions extends Component {
  state = {
    showDrillParameters: false,
    instructionList: [
      {
        title: 'Main Rig Floor Activities',
        desc: 'Drilling 12-1/4” x 14-1/2” hole section'
      },
      {
        title: 'Aux Rig Floor Activities',
        desc: 'Rearrange stands in the derrick'
      },
      { title: 'Simultaneous Drill Floor Activities', desc: 'None' }
    ]
  };
  onDrillParametersHandler = () => {
    console.log('Clicked');
    this.setState({ showDrillParameters: true });
  };

  onDrillParmetersCloseHandler = () =>
    this.setState({ showDrillParameters: false });

  onNextClickHandler = () => {
    this.props.history.push('/dailychecklist');
  };
  onBackClickHandler = () => {
    this.props.history.push('/handovers');
  };
  onSkipClickHandler = () => {
    this.props.history.push('/digitalprocedure');
  };
  render() {
    return (
      <div className={classes.DailyInstructions}>
        <button
          className={classes.DrillingParameterButton}
          onClick={this.onDrillParametersHandler}
        >
          Drilling parameter
        </button>
        <Modal
          show={this.state.showDrillParameters}
          modalClosed={this.onDrillParmetersCloseHandler}
        >
          <DrillingParameter
            onClose={this.onDrillParmetersCloseHandler}
          ></DrillingParameter>
        </Modal>
        <DailyInstructionList
          instructionList={this.state.instructionList}
        ></DailyInstructionList>
        <EquipmentInstruction></EquipmentInstruction>
        <Footer>
          <div style={{ width: '50%', display: 'flex' }}>
            <Button
              btnType='Primary'
              clicked={this.onBackClickHandler}
              style={{ marginRight: '10px' }}
            >
              <FontAwesomeIcon
                icon='arrow-circle-left'
                style={{ marginRight: '5px' }}
              />
              <span>Back</span>
            </Button>
            <Button btnType='Secondary' clicked={this.onSkipClickHandler}>
              <span>Skip</span>
            </Button>
          </div>
          <div
            style={{
              width: '50%',
              display: 'flex',
              justifyContent: 'flex-end'
            }}
          >
            <Button btnType='Primary' clicked={this.onNextClickHandler}>
              <span>Next</span>
              <FontAwesomeIcon
                icon='arrow-circle-right'
                style={{ marginLeft: '5px' }}
              />
            </Button>
          </div>
        </Footer>
      </div>
    );
  }
}

export default withRouter(DailyInstructions);
