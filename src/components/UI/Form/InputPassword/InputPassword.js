import React from 'react';

const InputPassword = props => {
  return (
    <div className='form-group'>
      {/* <label htmlFor='inputText'>{props.label}</label> */}
      <input
        className='Input'
        id='inputText'
        type='password'
        placeholder={props.label}
      />
    </div>
  );
};

export default InputPassword;
