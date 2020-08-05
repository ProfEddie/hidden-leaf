import React from 'react';
import './style.scss'
import Form from './components/StyledForm'
function SectionRegister() {
  var groupRegistForm = [
    {
      placeholder: 'Tên đội thi',
      type: 'text',
      id: 'group-name',
      isTitle: false,
      isRequired: true
    },{
      placeholder: 'Leader',
      type: 'text',
      id: 'group-leader',
      isTitle: false,
      isRequired: true

    },{
      placeholder: 'Thành viên 01',
      type: null,
      id: null,
      isTitle: true,
      isRequired: null
    },{
      placeholder: 'Họ và tên',
      type: 'text',
      id: 'member1-name',
      isTitle: false,
      isRequired: true,
    },{
      placeholder: 'Ngày/Tháng/Năm sinh',
      type: 'text',
      id: 'member1-birthData',
      isTitle: false,
      isRequired: true,
    },{
      placeholder: 'Email',
      type: 'email',
      id: 'member1-email',
      isTitle: false,
      isRequired: true,
    },{
      placeholder: 'Số điện thoại',
      type: 'tel',
      id: 'member1-tel',
      isTitle: false,
      isRequired: true,
    },{
      placeholder: 'Trường Đại học/ Cao đẳng',
      type: 'text',
      id: 'member1-university',
      isTitle: false,
      isRequired: true,
    },{
      placeholder: 'Thẻ sinh viên (Dẫn link GG Drive)',
      type: 'url',
      id: 'member1-student-card',
      isTitle: false,
      isRequired: true,
    },{
      placeholder: 'Thành viên 02',
      type: null,
      id: null,
      isTitle: true,
      isRequired: null
    },{
      placeholder: 'Họ và tên',
      type: 'text',
      id: 'member2-name',
      isTitle: false,
      isRequired: true,
    },{
      placeholder: 'Ngày/Tháng/Năm sinh',
      type: 'text',
      id: 'member2-birthData',
      isTitle: false,
      isRequired: true,
    },{
      placeholder: 'Email',
      type: 'email',
      id: 'member2-email',
      isTitle: false,
      isRequired: true,
    },{
      placeholder: 'Số điện thoại',
      type: 'tel',
      id: 'member2-tel',
      isTitle: false,
      isRequired: true,
    },{
      placeholder: 'Trường Đại học/ Cao đẳng',
      type: 'text',
      id: 'member2-university',
      isTitle: false,
      isRequired: true,
    },{
      placeholder: 'Thẻ sinh viên (Dẫn link GG Drive)',
      type: 'url',
      id: 'member2-student-card',
      isTitle: false,
      isRequired: true,
    },
    {
      placeholder: 'Thành viên 03',
      type: null,
      id: null,
      isTitle: true,
      isRequired: null
    },{
      placeholder: 'Họ và tên',
      type: 'text',
      id: 'member3-name',
      isTitle: false,
      isRequired: true,
    },{
      placeholder: 'Ngày/Tháng/Năm sinh',
      type: 'text',
      id: 'member3-birthData',
      isTitle: false,
      isRequired: true,
    },{
      placeholder: 'Email',
      type: 'email',
      id: 'member3-email',
      isTitle: false,
      isRequired: true,
    },{
      placeholder: 'Số điện thoại',
      type: 'tel',
      id: 'member3-tel',
      isTitle: false,
      isRequired: true,
    },{
      placeholder: 'Trường Đại học/ Cao đẳng',
      type: 'text',
      id: 'member3-university',
      isTitle: false,
      isRequired: true,
    },{
      placeholder: 'Thẻ sinh viên (Dẫn link GG Drive)',
      type: 'url',
      id: 'member3-student-card',
      isTitle: false,
      isRequired: true,
    }
  ]

  var memberRegistForm = [
    {
      placeholder: 'Thành viên 01',
      type: null,
      id: null,
      isTitle: true,
      isRequired: null
    },{
      placeholder: 'Họ và tên',
      type: 'text',
      id: 'member1-name',
      isTitle: false,
      isRequired: true,
    },{
      placeholder: 'Ngày/Tháng/Năm sinh',
      type: 'text',
      id: 'member1-birthData',
      isTitle: false,
      isRequired: true,
    },{
      placeholder: 'Email',
      type: 'email',
      id: 'member1-email',
      isTitle: false,
      isRequired: true,
    },{
      placeholder: 'Số điện thoại',
      type: 'tel',
      id: 'member1-tel',
      isTitle: false,
      isRequired: true,
    },{
      placeholder: 'Trường Đại học/ Cao đẳng',
      type: 'text',
      id: 'member1-university',
      isTitle: false,
      isRequired: true,
    },{
      placeholder: 'Thẻ sinh viên (Dẫn link GG Drive)',
      type: 'url',
      id: 'member1-student-card',
      isTitle: false,
      isRequired: true,
    },{
      placeholder: 'Thành viên 02',
      type: null,
      id: null,
      isTitle: true,
      isRequired: null
    },{
      placeholder: 'Họ và tên',
      type: 'text',
      id: 'member2-name',
      isTitle: false,
      isRequired: false,
    },{
      placeholder: 'Ngày/Tháng/Năm sinh',
      type: 'text',
      id: 'member2-birthData',
      isTitle: false,
      isRequired: false,
    },{
      placeholder: 'Email',
      type: 'email',
      id: 'member2-email',
      isTitle: false,
      isRequired: false,
    },{
      placeholder: 'Số điện thoại',
      type: 'tel',
      id: 'member2-tel',
      isTitle: false,
      isRequired: false,
    },{
      placeholder: 'Trường Đại học/ Cao đẳng',
      type: 'text',
      id: 'member2-university',
      isTitle: false,
      isRequired: false,
    },{
      placeholder: 'Thẻ sinh viên (Dẫn link GG Drive)',
      type: 'url',
      id: 'member2-student-card',
      isTitle: false,
      isRequired: false,
    }
  ]

  function handleGroupSubmit() {
       console.log('group')
  }
  function handleMemberSubmit() {
    console.log('member')
}
  return (
    <section className="child-section" id="register-section">
        <div id="register-content">
           <img className="register-img" id="img-1" src={require("../../../images/register/1.png")} alt="img_1"/>
           <div id="form-container">
              <Form data={groupRegistForm} formId="group-register-form" onSubmit={handleGroupSubmit}/>
                <img className="register-img" id="img-2" src={require("../../../images/register/2.png")} alt="img_2"/>
              <Form data={memberRegistForm} formId="member-register-form" onSubmit={handleMemberSubmit}/>
           </div>
        </div>
    </section>
  );
}

export default SectionRegister;
