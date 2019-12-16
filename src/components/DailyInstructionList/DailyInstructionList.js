import React from 'react';
import classes from './DailyInstructionList.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DailyInstructionList = props => {
  const instructionList = props.instructionList.map((instruction, index) => {
    return (
      <div key={index}>
        <div className={classes.DailyInstruction}>
          <h4>
            <FontAwesomeIcon
              icon='arrow-right'
              style={{ marginRight: '16px' }}
            />
            {instruction.title}
          </h4>
          <p className={classes.DailyInstructionDescription}>
            {instruction.desc}
          </p>
        </div>
      </div>
    );
  });
  return instructionList;
};

export default DailyInstructionList;
