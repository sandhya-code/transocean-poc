import React, { Component } from 'react';
import TBTProcedures from './TBTProcedures/TBTProcedures';
import ShoeTrack from './ShoeTrack/ShoeTrack';
import CollapsableStep from './CollapsableStep/CollapsableStep';
export default class ProcedureStep extends Component {
  render() {
    return (
      <React.Fragment>
        <TBTProcedures></TBTProcedures>
        <ShoeTrack></ShoeTrack>
        <CollapsableStep
          id='testFloats'
          stageNumber='3'
          procedureTitle='Test Floats'
          procedureStatus='Not yet checked'
        ></CollapsableStep>
        <CollapsableStep
          id='runCasing'
          stageNumber='4'
          procedureTitle='Run Casing'
          procedureStatus='Not yet checked'
        ></CollapsableStep>
        <CollapsableStep
          id='bop'
          stageNumber='5'
          procedureTitle='Cross BOPs and Run Casing to Hanger'
          procedureStatus='Not yet checked'
        ></CollapsableStep>
      </React.Fragment>
    );
  }
}
