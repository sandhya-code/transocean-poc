import React from 'react';
import classes from './SidebarModal.module.css';
import Backdrop from '../../Backdrop/Backdrop';

const sidebarModal = props => {
  let styleObj = {
    transform: props.show ? 'translateX(0)' : 'translateX(-100vh)',
    opacity: props.show ? '1' : '0'
  };

  if (props.style) {
    styleObj = { ...styleObj, ...props.style };
  }
  return (
    <React.Fragment>
      <Backdrop show={props.show} clicked={props.modalClosed}></Backdrop>
      <div className={classes.Modal} style={styleObj}>
        {props.children}
      </div>
    </React.Fragment>
  );
};

export default sidebarModal;
