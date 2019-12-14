import React, { Component } from 'react';
import ProcedureCheckList from './ProcedureCheckList/ProcedureCheckList';
import { alphaCount } from '../../../../constants/Procedures.Constant';

export class ProcedureCheckLists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checklists: this.props.checklists
    };
  }

  subLists = item => {
    let subItems = null;
    if (item.subText) {
      subItems = item.subText.map((item, index) => {
        const count = alphaCount[index];
        return (
          <ProcedureCheckList count={count} item={item}></ProcedureCheckList>
        );
      });

      subItems = <ul style={{ listStyle: 'none' }}>{subItems}</ul>;
    }
    return subItems;
  };

  render() {
    const { checklists } = this.state;
    return (
      <ul style={{ listStyle: 'none' }}>
        {checklists.map((item, index) => {
          let subItems = this.subLists(item);
          const count = index + 1;

          return (
            <React.Fragment key={index}>
              <ProcedureCheckList
                count={count}
                item={item}
              ></ProcedureCheckList>
              {subItems}
            </React.Fragment>
          );
        })}
      </ul>
    );
  }
}

export default ProcedureCheckLists;
