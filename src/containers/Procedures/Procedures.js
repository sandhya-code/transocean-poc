import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Navbar from '../../components/UI/Navbar/Navbar';
import classes from './Procedures.module.css';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ProceduresHeader from './ProceduresHeader/ProceduresHeader';
import ProcedureStep from './ProcedureStep/ProcedureStep';

class Procedures extends Component {
  static propTypes = {
    prop: PropTypes
  };

  onHomeClickHandler = () => {
    this.props.history.push('/digitalprocedure');
  };

  onOpenAll = () => {
    console.log('Collapse Toggle All');
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
          <Navbar></Navbar>
        </div>
        <hr className={classes.Separator}></hr>
        <ProceduresHeader></ProceduresHeader>
        <div className={classes.ProcedureStepsContainer}>

        <ProcedureStep></ProcedureStep>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(Procedures);
