import React from 'react';
import classes from './DrillingParameter.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DrillingParameter = props => {
  return (
    <div className={classes.DrillingParameter}>
      <div className='container'>
        <div className={[classes.Header, 'row'].join(' ')}>
          <h3>Drilling Parameters</h3>
        </div>
        <div className='row' style={{ marginBottom: '2rem' }}>
          <div className='col-4'>
            <p>WOB</p>
            <p>
              <strong>15K</strong>
            </p>
          </div>
          <div className='col-4'>
            <p>RPM</p>
            <p>
              <strong>80</strong>
            </p>
          </div>
          <div className='col-4'>
            <p>Torque</p>
            <p>
              <strong>22k</strong>
            </p>
          </div>
        </div>
        <div className='row' style={{ marginBottom: '2rem' }}>
          <div className='col-4'>
            <p>Mud Weight</p>
            <p>
              <strong>11.8ppg</strong>
            </p>
          </div>
          <div className='col-4'>
            <p>String Weight</p>
            <p>
              <strong>766K</strong>
            </p>
          </div>
          <div className='col-4'>
            <p>Viscosity</p>
            <p>
              <strong>52</strong>
            </p>
          </div>
        </div>
        <hr></hr>
        <div className='row' style={{ marginBottom: '2rem', color: '#00546F' }}>
          <div className='col-4'>
            <p>
              <strong> Pump#1</strong>
            </p>
            <p>
              SMP<strong> 80</strong>
            </p>
          </div>
          <div className='col-4'>
            <p>
              <strong> Pump#2</strong>
            </p>
            <p>
              SMP<strong> 80</strong>
            </p>
          </div>
          <div className='col-4'>
            <p>
              <strong> Pump#3</strong>
            </p>
            <p>
              SMP<strong> 100</strong>
            </p>
          </div>
        </div>
      </div>

      <button className={classes.CloseButton} onClick={props.onClose}>
        <FontAwesomeIcon icon='times-circle' style={{ marginRight: '5px' }} />
        <span>Close</span>
      </button>
    </div>
  );
};

export default DrillingParameter;
