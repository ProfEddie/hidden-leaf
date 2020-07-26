import React from 'react'
import './style.scss'

export default function StyledInput(props) {
    return (
        <div className="customized-input-container">
           <label className='form-label'>{props.label}</label> 
           <input className="customized-input" id={props.inputId} type={props.type} required={props.isRequired}/>
        </div>
    )
}