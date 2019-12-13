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
              style={{ marginRight: '5px' }}
            />
            {instruction.title}
          </h4>
          <h5 className={classes.DailyInstructionDescription}>
            {instruction.desc}
          </h5>
        </div>
      </div>
    );
  });
  return instructionList;
};

export default DailyInstructionList;
