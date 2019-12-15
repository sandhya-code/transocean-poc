import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from '../../components/Footer/Footer';
import Button from '../../components/UI/Button/Button';
import { withRouter } from 'react-router-dom';
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
        <WellMonitoring></WellMonitoring>
        <MudLogger></MudLogger>
        <RFWellControllEquip></RFWellControllEquip>
        <Footer styleObj={{ justifyContent: 'space-between' }}>
          <Button btnType='Primary' clicked={onBackClickHandler}>
            <FontAwesomeIcon
              icon='arrow-circle-left'
              style={{ marginRight: '5px' }}
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
              style={{ marginLeft: '5px' }}
            />
          </Button>
        </Footer>
      </div>
    </React.Fragment>
  );
};

export default withRouter(DailyChecklist);
