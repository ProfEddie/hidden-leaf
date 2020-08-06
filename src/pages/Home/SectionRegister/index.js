import React from 'react';
import './style.scss'
import Form from './components/StyledForm'
import moment from 'moment'
function SectionRegister() {

  var groupRegistForm = [
    {
      placeholder: 'Tên đội thi',
      type: 'text',
      id: 'group-name',
      isTitle: false,
      isRequired: true,
      className: 'group'
    },{
      placeholder: 'Leader',
      type: 'text',
      id: 'group-leader',
      isTitle: false,
      isRequired: true,
      className: 'group',

    },{
      placeholder: 'Thành viên 01',
      type: null,
      id: null,
      isTitle: true,
      isRequired: null
    },{
      placeholder: 'Họ và tên',
      type: 'text',
      id: 'group-member1-name',
      isTitle: false,
      className: 'group',
      isRequired: true,
    },{
      placeholder: 'Ngày/Tháng/Năm sinh',
      type: 'text',
      id: 'group-member1-birthDate',
      className: 'group',
      isTitle: false,
      isRequired: true,
    },{
      placeholder: 'Email',
      type: 'email',
      id: 'group-member1-email',
      className: 'group',
      isTitle: false,
      isRequired: true,
    },{
      placeholder: 'Số điện thoại',
      type: 'tel',
      id: 'group-member1-tel',
      isTitle: false,
      className: 'group',
      isRequired: true,
    },{
      placeholder: 'Trường Đại học/ Cao đẳng',
      type: 'text',
      id: 'group-member1-university',
      isTitle: false,
      className: 'group',
      isRequired: true,
    },{
      placeholder: 'Thẻ sinh viên (Dẫn link GG Drive)',
      type: 'url',
      id: 'group-member1-student-card',
      isTitle: false,
      className: 'group',
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
      id: 'group-member2-name',
      isTitle: false,
      className: 'group',
      isRequired: true,
    },{
      placeholder: 'Ngày/Tháng/Năm sinh',
      type: 'text',
      id: 'group-member2-birthDate',
      isTitle: false,
      className: 'group',
      isRequired: true,
    },{
      placeholder: 'Email',
      type: 'email',
      id: 'group-member2-email',
      isTitle: false,
      className: 'group',
      isRequired: true,
    },{
      placeholder: 'Số điện thoại',
      type: 'tel',
      id: 'group-member2-tel',
      isTitle: false,
      className: 'group',
      isRequired: true,
    },{
      placeholder: 'Trường Đại học/ Cao đẳng',
      type: 'text',
      id: 'group-member2-university',
      isTitle: false,
      className: 'group',
      isRequired: true,
    },{
      placeholder: 'Thẻ sinh viên (Dẫn link GG Drive)',
      type: 'url',
      id: 'group-member2-student-card',
      isTitle: false,
      className: 'group',
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
      id: 'group-member3-name',
      isTitle: false,
      className: 'group',
      isRequired: true,
    },{
      placeholder: 'Ngày/Tháng/Năm sinh',
      type: 'text',
      id: 'group-member3-birthDate',
      isTitle: false,
      className: 'group',
      isRequired: true,
    },{
      placeholder: 'Email',
      type: 'email',
      id: 'group-member3-email',
      isTitle: false,
      className: 'group',
      isRequired: true,
    },{
      placeholder: 'Số điện thoại',
      type: 'tel',
      id: 'group-member3-tel',
      isTitle: false,
      className: 'group',
      isRequired: true,
    },{
      placeholder: 'Trường Đại học/ Cao đẳng',
      type: 'text',
      id: 'group-member3-university',
      isTitle: false,
      className: 'group',
      isRequired: true,
    },{
      placeholder: 'Thẻ sinh viên (Dẫn link GG Drive)',
      type: 'url',
      id: 'group-member3-student-card',
      isTitle: false,
      className: 'group',
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
      className: 'member',
      isTitle: false,
      isRequired: true,
    },{
      placeholder: 'Ngày/Tháng/Năm sinh',
      type: 'text',
      id: 'member1-birthDate',
      isTitle: false,
      className: 'member',
      isRequired: true,
    },{
      placeholder: 'Email',
      type: 'email',
      id: 'member1-email',
      isTitle: false,
      className: 'member',
      isRequired: true,
    },{
      placeholder: 'Số điện thoại',
      type: 'tel',
      id: 'member1-tel',
      isTitle: false,
      className: 'member',
      isRequired: true,
    },{
      placeholder: 'Trường Đại học/ Cao đẳng',
      type: 'text',
      id: 'member1-university',
      isTitle: false,
      className: 'member',
      isRequired: true,
    },{
      placeholder: 'Thẻ sinh viên (Dẫn link GG Drive)',
      type: 'url',
      id: 'member1-student-card',
      isTitle: false,
      className: 'member',
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
      className: 'member',
      isRequired: false,
    },{
      placeholder: 'Ngày/Tháng/Năm sinh',
      type: 'text',
      id: 'member2-birthDate',
      isTitle: false,
      className: 'member',
      isRequired: false,
    },{
      placeholder: 'Email',
      type: 'email',
      id: 'member2-email',
      isTitle: false,
      className: 'member',
      isRequired: false,
    },{
      placeholder: 'Số điện thoại',
      type: 'tel',
      id: 'member2-tel',
      isTitle: false,
      className: 'member',
      isRequired: false,
    },{
      placeholder: 'Trường Đại học/ Cao đẳng',
      type: 'text',
      id: 'member2-university',
      isTitle: false,
      className: 'member',
      isRequired: false,
    },{
      placeholder: 'Thẻ sinh viên (Dẫn link GG Drive)',
      type: 'url',
      id: 'member2-student-card',
      isTitle: false,
      className: 'member',
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
              <div data-aos="fade-right" data-aos-once="true">
                <Form title="ĐĂNG KÍ DỰ THI"data={groupRegistForm} formId="group-register-form" onSubmit={handleGroupSubmit} dueDate={moment.duration(moment('2020-08-23').diff(moment()))} />
              </div>
                <img className="register-img" id="img-2" src={require("../../../images/register/2.png")} alt="img_2"/>
                <div data-aos="fade-left"data-aos-once="true">
                  <Form title="ĐĂNG KÍ GHÉP NHÓM" data={memberRegistForm} formId="member-register-form" onSubmit={handleMemberSubmit} dueDate={moment.duration(moment('2020-08-21').diff(moment()))} />
                </div>
           </div>
        </div>
    </section>
  );
}

export default SectionRegister;
