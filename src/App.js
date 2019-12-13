import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../src/components/Header/Header';

import Login from './containers/Login/Login';
import Navigation from '../src/components/Navigation/Navigation';
import Handovers from '../src/containers/Handovers/Handovers';
import DailyInstructions from './containers/DailyInstructions/DailyInstructions';
import DailyChecklist from '../src/containers/DailyChecklist/DailyChecklist';
import DigitalProcedures from '../src/containers/DigitalProcedures/DigitalProcedures';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCoffee,
  faCheckSquare,
  faBars,
  faSignOutAlt,
  faUser,
  faCheckCircle,
  faExclamationTriangle,
  faFileSignature,
  faArrowRight,
  faArrowCircleRight,
  faArrowCircleLeft,
  faTimesCircle,
  faChevronCircleDown,
  faChevronCircleUp,
  faLayerGroup,
  faBinoculars,
  faBell,
  faClipboardCheck,
  faUsers,
  faChalkboardTeacher,
  faClipboard,
  faClipboardList
} from '@fortawesome/free-solid-svg-icons';

// import Login from './components/Login/Login';
import classes from './App.module.css';

library.add(
  faBell,
  faCoffee,
  faCheckSquare,
  faBars,
  faSignOutAlt,
  faUser,
  faCheckCircle,
  faExclamationTriangle,
  faFileSignature,
  faArrowRight,
  faArrowCircleRight,
  faArrowCircleLeft,
  faTimesCircle,
  faChevronCircleDown,
  faChevronCircleUp,
  faLayerGroup,
  faBinoculars,
  faClipboardCheck,
  faUsers,
  faChalkboardTeacher,
  faClipboard,
  faClipboardList
);

export default class App extends Component {
  state = {
    userName: '',
    outgoingDriller: 'Jocob Harrison',
    prevUser: {
      name: 'Jacob Harrison',
      role: 'Driller',
      timeStamp: 'Monday, 1 Dec'
    },
    isLoggedIn: false
  };

  header = () => {
    return (
      <Header
        submittedByUser={this.state.prevUser.name}
        submittedByRole={this.state.prevUser.role}
        submittedByTimeStamp={this.state.prevUser.timeStamp}
      ></Header>
    );
  };

  render() {
    const header = this.header();
    return (
      <div className={classes.App}>
        <Switch>
          <Route path='/' exact>
            <Login></Login>
          </Route>
          <Route path='/handovers'>
            <Navigation pageTitle='Handovers'></Navigation>
            {header}
            <div className={classes.Container}>
              <Handovers></Handovers>
            </div>
          </Route>
          <Route path='/dailyinstruction' exact>
            <Navigation pageTitle='Daily Instructions'></Navigation>
            {header}
            <div className={classes.Container}>
              <DailyInstructions></DailyInstructions>
            </div>
          </Route>
          <Route path='/dailychecklist' exact>
            <Navigation pageTitle='Daily Checklist'></Navigation>
            {header}
            <DailyChecklist></DailyChecklist>
          </Route>
          <Route path='/digitalprocedure' exact>
            <Navigation pageTitle='Digital Procedure'></Navigation>
            {header}
            <DigitalProcedures></DigitalProcedures>
          </Route>
        </Switch>
      </div>
    );
  }
}

// function App() {
//   // let state = {
//   //   userName: '',
//   //   outgoingDriller: 'Jocob Harrison',
//   //   prevUser: {
//   //     name: 'Jack McGrath',
//   //     role: 'Driller',
//   //     timeStamp: 'Monday, 1 Dec'
//   //   },
//   //   isLoggedIn: false
//   // };
// }
