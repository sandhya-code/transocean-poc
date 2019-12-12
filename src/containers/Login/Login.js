import React from 'react';
import Card from '../../components/UI/Card/Card';
import Input from '../../components/UI/Form/Input/Input';
import InputPassword from '../../components/UI/Form/InputPassword/InputPassword';
import Button from '../../components/UI/Button/Button';
import classes from './Login.module.css';
import logo from '../../../src/assets/Transocean_logo.png';
import { withRouter } from 'react-router-dom';

const Login = props => {
  const onLoginHandler = () => {
    console.log('Login Clicked');
    props.history.push('/handovers');
  };
  return (
    <Card type='Login'>
      <div className={classes.FormContainer}>
        <h2>Welcome to</h2>
        <div className={classes.Logo}>
          <img src={logo} alt='Logo' />
        </div>
        <div className={classes.Form}>
          <label>Login using account details to access</label>
          <Input label='User Name'></Input>
          <InputPassword label='Password'></InputPassword>
        </div>
        <div className={classes.ButtonRow}>
          <a className={classes.ResetPassword} href='/'>
            Reset Password
          </a>
          <Button btnType='Theme' clicked={onLoginHandler}>
            Login
          </Button>
        </div>
      </div>
      <div
        className={[
          classes.SideImage,
          'd-sm-none',
          'd-md-inline',
          'd-md-inline'
        ].join(' ')}
      ></div>
    </Card>
  );
};

export default withRouter(Login);
