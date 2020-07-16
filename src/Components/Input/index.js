import React from 'react'
import './style.css'

export default function StyledInput(props) {
    return (
        <div class="customized-input-container">
           <label style={{
               top: '5px',
               position: 'absolute',
               left: '17px',
               color: 'black'
           }}>hello</label> 
           <input class="customized-input" id={props.inputId}/>
        </div>
    )
}