import React from 'react';

const Input = props => {
  return (
    <div className='form-group'>
      {/* <label htmlFor='inputText'>{props.label}</label> */}
      <input
        className='Input'
        id='inputText'
        type='text'
        placeholder={props.label}
      />
    </div>
  );
};

export default Input;
