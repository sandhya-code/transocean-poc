import React, { Component } from 'react';
import Navbar from '../../components/UI/Navbar/Navbar';
import classes from './Procedures.module.css';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ProceduresHeader from './ProceduresHeader/ProceduresHeader';
import ProcedureStep from './ProcedureStep/ProcedureStep';

class Procedures extends Component {
  state = {
    showEFroms: false
  };
  onHomeClickHandler = () => {
    this.props.history.push('/digitalprocedure');
  };

  onOpenAll = () => {
    console.log('Collapse Toggle All');
  };

  oneFroms = () => {};
  onNavChanged = curSelection => {
    if (curSelection === 'eForms') {
      this.setState({ showEFroms: true });
    } else {
      this.setState({ showEFroms: false });
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className={classes.Procedures}>
          <button
            className={classes.HomeButton}
            onClick={this.onHomeClickHandler}
          >
            <FontAwesomeIcon icon='home' style={{ marginRight: '5px' }} />
            Casing
          </button>
          <Navbar onNavChanged={this.onNavChanged}></Navbar>
        </div>
        <hr className={classes.Separator}></hr>
        <ProceduresHeader></ProceduresHeader>
        {!this.state.showEFroms ? (
          <div className={classes.ProcedureStepsContainer}>
            <ProcedureStep></ProcedureStep>
          </div>
        ) : (
          <div className={classes.EFormPageUnderConstruction}>
            <h3>Page under construction</h3>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default withRouter(Procedures);
