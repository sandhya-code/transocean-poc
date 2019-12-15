import React from 'react';
import styles from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';

const modal = props => {
  let styleObj = {
    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
    opacity: props.show ? '1' : '0'
  };

  if (props.style) {
    styleObj = { ...styleObj, ...props.style };
    console.log('styleObj --------------- ', styleObj);
  }
  return (
    <React.Fragment>
      <Backdrop show={props.show} clicked={props.modalClosed}></Backdrop>
      <div className={styles.Modal} style={styleObj}>
        {props.children}
      </div>
    </React.Fragment>
  );
};

export default modal;
