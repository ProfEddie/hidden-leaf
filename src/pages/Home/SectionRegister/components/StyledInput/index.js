import React from 'react';
import Select from 'react-select'
import './style.scss'
function StyledInput(props) {
  const options = [
    { value: 'male', label: 'Nam' },
    { value: 'female', label: 'Nữ' },
  ]
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
    }),
    control: (provided, state) => ({
        ...provided,
        border: 'none',
        outline: 'none',
        paddingLeft: '12px',
        height: '53px',
        borderRadius: '0px',
        fontSize: '14px',
    }),
    singleValue: (provided, state) => {
      return ({
        ...provided,
      })
    }, 
  }

  function handleChange(selectedOption) {
    props.handleChangeGender(props.id,selectedOption)
  } 
  return (
    props.type !== 'select' 
    ? <input
      data-placeholder={props.placeholder || null}
      placeholder={props.placeholder}
      type={props.type || "text"} 
      id={props.id} 
      className={`register-input ${props.className}`} 
      required={props.isRequired} 
      disabled={props.isDisabled}
    />
    :
    <div className="custom-select">
       <Select
        options={options} 
        styles={customStyles}
        onChange={handleChange}
        placeholder="Giới tính"
      />
    </div>
   
  );
}

export default StyledInput;
