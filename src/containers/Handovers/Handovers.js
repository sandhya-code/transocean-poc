import React, { Component } from 'react';
import BorderContainer from '../../components/UI/BorderContainer/BorderContainer';
import EquipmentStatus from './EquipmentStatus/EquipmentStatus';
import HandoverStatus from './HandoverStatus/HandoverStatus';
import Button from '../../components/UI/Button/Button';
import Footer from '../../components/Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classes from './Handovers.module.css';
import { withRouter } from 'react-router-dom';

// import React, { Component } from 'react'

class Handovers extends Component {
  onAcknowledgeHandler = () => {
    this.props.history.push('/dailyinstruction');
  };
  render() {
    return (
      <div className={classes.HandoverContainer}>
        <HandoverStatus></HandoverStatus>
        <EquipmentStatus></EquipmentStatus>
        <BorderContainer styleObj={{ minHeight: '100px' }}>
          <p>
            <strong>Other Comments: </strong>Spacer is being built in pit 2
          </p>
        </BorderContainer>

        <div className='row'>
          <div className='col-5'>
            <BorderContainer styleObj={{ lineHeight: '1.2' }}>
              <p>
                <small>Handover Driller</small>
              </p>
              <h4>
                <strong>Jocob Harrison</strong>
              </h4>
            </BorderContainer>
          </div>
          <div className='col-2'></div>
          <div className='col-5'>
            <BorderContainer styleObj={{ lineHeight: '1.2' }}>
              <p>
                <small>Current Driller</small>
              </p>
              <h4>
                <strong>Jack McGrath</strong>
              </h4>
            </BorderContainer>
          </div>
        </div>
        <Footer styleObj={{ justifyContent: 'flex-end' }}>
          <Button btnType='Success' clicked={this.onAcknowledgeHandler}>
            <span>Acknowledge</span>
            <FontAwesomeIcon
              icon='file-signature'
              style={{ marginLeft: '5px' }}
              size='lg'
            />
          </Button>
        </Footer>
      </div>
    );
  }
}

export default withRouter(Handovers);
