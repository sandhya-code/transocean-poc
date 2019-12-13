import React from 'react';
import Classes from './Navigation.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { withRouter } from 'react-router-dom';
const navigation = props => {
  const onLogoutClickHandler = () => {
    props.history.push('/');
  };
  return (
    <div className={Classes.Naviation}>
      <div style={{ marginTop: '0.5rem' }}>
        <FontAwesomeIcon icon='bars' size='lg' />
      </div>
      <h1 className={Classes.Title}>{props.pageTitle}</h1>
      <div className={Classes.User}>
        <FontAwesomeIcon icon='bell' size='lg' />
        <span className={Classes.Notification}></span>
      </div>
      <div className={Classes.SignOut} onClick={onLogoutClickHandler}>
        <FontAwesomeIcon icon='sign-out-alt' size='lg' />
      </div>
    </div>
  );
};

export default withRouter(navigation);
