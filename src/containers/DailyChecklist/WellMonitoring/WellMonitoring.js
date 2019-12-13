import React, { Component } from 'react';
import Select from '../../../components/UI/Form/Select/Select';
import classes from './WellMonitoring.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Collapsible from '../../../components/UI/Collapsible/Collapsible';

export default class WellMonitoring extends Component {
  wellMonitoringOptions = [
    { text: '-5', value: '-5' },
    { text: '-4', value: '-4' },
    { text: '-3', value: '-3' },
    { text: '-2', value: '-2' },
    { text: '-1', value: '-1' },
    { text: '0', value: '0' },
    { text: '+1', value: '+1' },
    { text: '+2', value: '+2' },
    { text: '+3', value: '+3' },
    { text: '+4', value: '+4' },
    { text: '+5', value: '+5' }
  ];
  state = {
    wellMontitoringItem: [
      { parameter: 'PVT high/low alarm', value: '-3' },
      { parameter: 'Flow-show high/low alarm', value: '-2' },
      { parameter: 'Mud system status', value: '-4' }
    ]
  };

  onSelectedValueChanged = (event, index) => {
    console.log(event.target.value);
    console.log('Changed index' + index);
    let checklist = { ...this.state.wellMontitoringItem };
    console.log('Before Update', checklist);
    checklist[index].value = event.target.value;
    console.log('After Update', checklist);

    this.setState({ wellMontitoringItem: checklist });
  };

  wellMonitoringChecklist = this.state.wellMontitoringItem.map(
    (item, index) => (
      <li key={index} className={classes.WellMonitoring}>
        <p>{item.parameter}</p>
        <div style={{ width: '60px' }}>
          <Select
            options={this.wellMonitoringOptions}
            selectedValue={item.value}
            selectedValueChanged={event =>
              this.onSelectedValueChanged(event, index)
            }
          ></Select>
        </div>
      </li>
    )
  );
  render() {
    return (
      <Collapsible
        header={
          <h3 style={{ lineHeight: 1 }}>
            <FontAwesomeIcon
              icon='arrow-right'
              style={{
                marginRight: '10px',
                fontSize: '16px',
                fontWeight: 'normal'
              }}
            />
            Well Monitoring{' '}
          </h3>
        }
        id='wellMonitoring'
      >
        <ul>{this.wellMonitoringChecklist}</ul>
      </Collapsible>
    );
  }
}
