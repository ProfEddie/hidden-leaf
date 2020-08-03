import React from 'react';
import './style.scss'
import Input from '../StyledInput'
import Clock from '../Clock'
function StyledForm() {
  return (
    <div id="form">
        <p id="title">ĐĂNG KÍ DỰ THI</p>
        <Input placeholder="Tên đội thi"/>
        <Input placeholder="Tên đội thi"/>
        <Input placeholder="Tên đội thi"/>
        <Input placeholder="Tên đội thi"/>
        <Input placeholder="Tên đội thi"/>
        <Clock/>
    </div>
  );
}

export default StyledForm;
