import React from 'react'
import './style.scss'

export default function StyledInput(props) {
    return (
        <div className="customized-input-container-2">
           <label className='form-label-2'>{props.label}</label> 
           <input className="customized-input-2" id={props.inputId} type={props.type} required={props.isRequired}/>
        </div>
    )
}