import React from 'react';
import classes from './HandoverStatus.module.css';

const handoverStatus = props => (
  <React.Fragment>
    <div className={[classes.HandoverStatus, 'row'].join(' ')}>
      <div className={[classes.TimeLine, 'col-3'].join(' ')}>
        <span className={[classes.Pointer, classes.Completed].join(' ')}></span>
        <hr className={classes.Completed}></hr>
        <span className={classes.ProgressIndicator}>50%</span>
      </div>
      <div className='col-3'>
        <hr></hr>
      </div>
      <div className={[classes.TimeLine, 'col-3'].join(' ')}>
        <span className={classes.Pointer}></span>
        <hr></hr>
      </div>
      <div className={[classes.TimeLine, 'col-3'].join(' ')}>
        <hr></hr>
        <span className={classes.Pointer}></span>
      </div>
    </div>
    <div className='row' style={{ marginBottom: '2rem' }}>
      <div className='col-6'>
        <h3 style={{ color: '#2ECC40' }}>Present Operations</h3>
        <p style={{ color: '#00546F', fontWeight: '600' }}>
          Running in hole with 14” liner on V150 landing string
        </p>
        <p>
          <small>
            <span style={{ marginRight: '4rem' }}>
              Total Depth: <strong>200000 ft.</strong>
            </span>
            <span>
              Current depth: <strong>10000 ft.</strong>
            </span>
          </small>
        </p>
      </div>
      <div className='col-6' style={{ paddingLeft: '0' }}>
        <h3>Upcoming Operations</h3>
        <p>Cementing 14” Liner</p>
      </div>
    </div>
  </React.Fragment>
);

export default handoverStatus;
