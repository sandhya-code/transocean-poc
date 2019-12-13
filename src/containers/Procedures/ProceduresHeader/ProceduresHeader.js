import React from 'react';
import classes from './ProceduresHeader.module.css';

const ProceduresHeader = () => {
  return (
    <div className={classes.ProcedureHeader}>
      <div className={classes.Header}>
        <label className={classes.Title}>
          CP (Control Procedure)- Run Intermediate Casing
        </label>
        <label className={classes.Description}>Sequential Procedure</label>
      </div>
      <div className={classes.OpenAllContainer}></div>
    </div>
  );
};

export default ProceduresHeader;
