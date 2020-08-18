import React, {useState} from 'react';
import './style.scss'
import Input from '../StyledInput'
import Clock from '../Clock'
function StyledForm(props) {
  const [active, setActive] = useState(false)

  return (
    <form className={`form ${active?'active':'inactive'}`} id={props.formId} onSubmit={(e) => props.onSubmit(e)}  >
        <p id="title" onClick={() =>  props.dueDate && setActive(!active)}>{props.title}</p>
        <div className="input-container">
          {
            props.data.map((item, index) => {
              return  (
                <Input 
                  placeholder={item.placeholder} 
                  id={item.id} isRequired={item.isRequired} 
                  type={item.type} key={index} 
                  className={item.className} 
                  isDisabled={item.isTitle} 
                  handleChangeGender={props.handleChangeGender}
                />
              )
            })
          }
           <button  className="submit-button" type="submit">Submit</button>
           <p  className="psedo-button" type="pseudo">Gặp rắc rối khi đăng ký? Nhấp vào <a href={props.registerLink}>đây</a></p>
        </div>
        <Clock dueDate={props.dueDate}/>
        <img className="img-5" src={require('../../../../../images/register/5.png')} alt="img-clock"/>
    </form>
  );
}

export default StyledForm;
