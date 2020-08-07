import React, {useState} from 'react';
import './style.scss'
import Input from '../StyledInput'
import Clock from '../Clock'
function StyledForm(props) {
  const [active, setActive] = useState(false)

  return (
    <form className={`form ${active?'active':'inactive'}`} id={props.formId} onSubmit={props.onSubmit}  >
        <p id="title" onClick={() => setActive(!active)}>{props.title}</p>
        <div className="input-container">
          {
            props.data.map((item, index) => {
              return  (
                <Input placeholder={item.placeholder} id={item.id} isRequired={item.isRequired} type={item.type} key={index} className={item.className} isDisabled={item.isTitle}/>
              )
            })
          }
        </div>
        <Clock dueDate={props.dueDate}/>
    </form>
  );
}

export default StyledForm;
