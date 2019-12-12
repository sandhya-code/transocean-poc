import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from '../../components/Footer/Footer';
import Button from '../../components/UI/Button/Button';
import { withRouter } from 'react-router-dom';
import Collapsible from '../../components/UI/Collapsible/Collapsible';
import WellMonitoring from './WellMonitoring/WellMonitoring';
import MudLogger from './MudLogger/MudLogger';
import RFWellControllEquip from './RFWellControllEquip/RFWellControllEquip';
import classes from './DailyChecklist.module.css';

export const DailyChecklist = props => {
  const onBackClickHandler = () => {
    props.history.push('/dailyinstruction');
  };
  const onProceedClickHandler = () => {
    props.history.push('/digitalprocedure');
  };
  return (
    <React.Fragment>
      <div className={classes.DailyChecklistContainer}>
        <Collapsible header='Well Monitoring' id='wellMonitoring'>
          <WellMonitoring></WellMonitoring>
        </Collapsible>
        <Collapsible header='Mud Logger' id='mudLogger'>
          <MudLogger></MudLogger>
        </Collapsible>
        <Collapsible header='RF Well Controll Equip' id='rfWellControllEquip'>
          <RFWellControllEquip></RFWellControllEquip>
        </Collapsible>
      </div>
      <Footer styleObj={{ justifyContent: 'space-between' }}>
        <Button btnType='Primary' clicked={onBackClickHandler}>
          <FontAwesomeIcon
            icon='arrow-circle-left'
            style={{ marginRight: '8px' }}
          />
          <span>Back</span>
        </Button>
        <Button btnType='Success' clicked={onProceedClickHandler}>
          <div
            style={{
              textAlign: 'start',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <small style={{ color: '#00546F', lineHeight: 1 }}>
              Proceed to
            </small>
            <h4 style={{ color: '#000', lineHeight: 1.2 }}>
              Digital Procedure
            </h4>
          </div>
          <FontAwesomeIcon
            icon='arrow-circle-right'
            style={{ marginLeft: '8px' }}
          />
        </Button>
      </Footer>
    </React.Fragment>
  );
};

export default withRouter(DailyChecklist);
