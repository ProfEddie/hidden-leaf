import React from 'react';
import CustomizedInput from '../../Components/Input'
import './SectionForm.css'

export default function SectionForm() {
    return (
        <section className="child-section" id="form-section">
          <div id="form-section-content">
             <div className="form" id="register-form">
                <CustomizedInput inputId='hello'/>
             </div>
             <div className="form" id="group-form">
              <CustomizedInput inputId='hello'/>
             </div>
          </div>
        </section>
    )
}