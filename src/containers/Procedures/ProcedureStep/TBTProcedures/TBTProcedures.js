import React, { Component } from 'react';
import ProcedureCheckLists from '../ProcedureCheckLists/ProcedureCheckLists';
import CollapsableStep from '../CollapsableStep/CollapsableStep';
import { TBT } from '../../../../constants/Procedures.Constant';

export class TBTProcedures extends Component {
  constructor(props) {
    super(props);
    this.state = {
      procedureTitle: 'Operational Specific Talking Points for TBT',
      procedureStatus: 'Open and check to start',
      checklists: TBT
    };
  }

  render() {
    const { procedureTitle, procedureStatus, checklists } = this.state;
    return (
      <CollapsableStep
        stageNumber={'1'}
        procedureTitle={procedureTitle}
        procedureStatus={procedureStatus}
      >
        <ProcedureCheckLists checklists={checklists}></ProcedureCheckLists>
      </CollapsableStep>
    );
  }
}

export default TBTProcedures;
