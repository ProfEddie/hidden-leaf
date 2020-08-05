import React from 'react';
import './style.scss'
import Input from '../StyledInput'
import Clock from '../Clock'
function StyledForm(props) {
  return (
    <form className="form" id={props.formId} onSubmit={props.onSubmit}>
        <p id="title">ĐĂNG KÍ DỰ THI</p>
        <div className="input-container">
          {
            props.data.map((item, index) => {
              return  (
                <Input placeholder={item.placeholder} id={item.id} isRequired={item.isRequired} type={item.type} key={index} isDisabled={item.isTitle}/>
              )
            })
          }
        </div>
        <Clock/>
    </form>
  );
}

export default StyledForm;
