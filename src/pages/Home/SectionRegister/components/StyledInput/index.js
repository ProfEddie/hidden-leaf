import React from 'react';
import './style.scss'
function StyledInput(props) {
  return (
    props.type !== 'date'
    ? <input
        placeholder={props.placeholder}
        type={props.type || "text"} 
        id={props.id} 
        className={`register-input ${props.className}`} 
        required={props.isRequired} 
        disabled={props.isDisabled}
      />
    : <input 
        data-placeholder={props.placeholder}
        type="date" 
        id={props.id} 
        className={`register-input ${props.className}`} 
        required={props.isRequired} 
        disabled={props.isDisabled}
      /> 
  );
}

export default StyledInput;
