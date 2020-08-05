import React from 'react';
import './style.scss'
function StyledInput(props) {
  return (
    <input placeholder={props.placeholder} type={props.type || "text"} id={props.id} className="register-input" required={props.isRequired} disabled={props.isDisabled}/>
  );
}

export default StyledInput;
