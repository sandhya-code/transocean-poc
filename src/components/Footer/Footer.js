import React from 'react';
import classes from './Footer.module.css';

const Footer = props => {
  return (
    <div className={classes.Footer} style={props.styleObj}>
      {props.children}
    </div>
  );
};

export default Footer;
