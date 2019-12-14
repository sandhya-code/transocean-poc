import React, { Component } from 'react';
import TBTProcedures from './TBTProcedures/TBTProcedures';
import ShoeTrack from './ShoeTrack/ShoeTrack';
export default class ProcedureStep extends Component {
  render() {
    return (
      <React.Fragment>
        <TBTProcedures></TBTProcedures>
        <ShoeTrack></ShoeTrack>
      </React.Fragment>
    );
  }
}
