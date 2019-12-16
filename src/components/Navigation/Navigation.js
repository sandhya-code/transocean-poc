import React, { Component } from 'react';
import Classes from './Navigation.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SidebarModal from '../UI/Sidebar/SidebarModal/SidebarModal';
import Sidebar from '../UI/Sidebar/Sidebar';

import { withRouter } from 'react-router-dom';

class Navigation extends Component {
  state = {
    showSideBar: false
  };
  onMenuClick = () => {
    this.setState({ showSideBar: true });
  };

  onCloseSideBar = () => {
    this.setState({ showSideBar: false });
  };

  onLogoutClickHandler = () => {
    this.props.history.push('/');
  };
  render() {
    return (
      <React.Fragment>
        <div className={Classes.Naviation}>
          <div style={{ marginTop: '0.5rem' }} onClick={this.onMenuClick}>
            <FontAwesomeIcon icon='bars' size='lg' />
          </div>
          <h1 className={Classes.Title}>{this.props.pageTitle}</h1>
          <div className={Classes.User}>
            <FontAwesomeIcon icon='bell' size='lg' />
            <span className={Classes.Notification}></span>
          </div>
          <div className={Classes.SignOut} onClick={this.onLogoutClickHandler}>
            <FontAwesomeIcon icon='sign-out-alt' size='lg' />
          </div>
        </div>

        <SidebarModal
          show={this.state.showSideBar}
          modalClosed={this.onCloseSideBar}
        >
          <Sidebar></Sidebar>
        </SidebarModal>
      </React.Fragment>
    );
  }
}

export default withRouter(Navigation);
