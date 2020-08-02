import React from 'react';
import './style.scss'
import Form from './components/StyledForm'
function SectionRegister() {
  return (
    <section className="child-section" id="register-section">
        <div id="register-content">
           <img className="register-img" id="img-1" src={require("../../../images/register/1.png")} alt="img_1"/>
           <div id="form-container">
              <Form/>
              <img className="register-img" id="img-2" src={require("../../../images/register/2.png")} alt="img_2"/>
              <Form/>
           </div>
        </div>
        {/* <img className="register-img" id="img-3" src={require("../../../images/register/3.png")} alt="img_3"/>
        <img className="register-img" id="img-4" src={require("../../../images/register/3.png")} alt="img_3"/>
        <img className="register-img" id="img-5" src={require("../../../images/register/3.png")} alt="img_3"/>
        <img className="register-img" id="img-6" src={require("../../../images/register/3.png")} alt="img_3"/>
        <img className="register-img" id="img-7" src={require("../../../images/register/4.png")} alt="img_4"/>
        <img className="register-img" id="img-8" src={require("../../../images/register/4.png")} alt="img_4"/> */}
    </section>
  );
}

export default SectionRegister;
