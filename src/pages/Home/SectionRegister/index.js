import React from 'react';
import './style.scss'
import Form from './components/StyledForm'
import Swal from 'sweetalert2'
import moment from 'moment'
import axios from 'axios'
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

  function checkValidEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
  }  

  function checkValidTel(tel) {
    const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
    return re.test(String(tel));
  }

  function checkValidURL(url) {
    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return pattern.test(url);
  }

function handleGroupSubmit() {
  try {
      var reqBody = {
          Group_name:  document.getElementById(`group-name`).value,
          Group_leader:  document.getElementById(`group-leader`).value,
      }

      if (!reqBody.Group_name || !reqBody.Group_leader ) throw new Error(`Bạn chưa điền đầy đủ thông tin cho nhóm!`)
      var data =  [1, 2, 3].map(function(item)  {
          var data = {
              Fullname: document.getElementById(`group-member${item}-name`).value || null,
              Birthdate: document.getElementById(`group-member${item}-birthDate`).value || null,
              Email: document.getElementById(`group-member${item}-email`).value || null,
              Phone_number: document.getElementById(`group-member${item}-tel`).value || null,
              University: document.getElementById(`group-member${item}-university`).value || null,
              Student_card: document.getElementById(`group-member${item}-student-card`).value || null,
              isLeader: (reqBody.Group_leader === document.getElementById(`group-member${item}-name`).value) ? true : false,
          }
          for (let key in data) {
              if (!data[key] && key !== 'isLeader')  {
                  throw new Error(
                      ` Bạn chưa điền đầy đủ thông tin cho thành viên ${item}.`
                  )
              }
              switch (key) {
                case 'Birthdate': {
                  if(!moment(data[key], 'DD/MM/YYYY', true).isValid()) {
                      throw new Error(
                          `${key.replace('_',' ').toLowerCase()} của thành viên ${item} không hợp lệ.`
                      )
                  }
                  break;
                }
                case 'Email': {
                  if (!checkValidEmail(data[key])) 
                  throw new Error(
                      `${key.replace('_',' ').toLowerCase()} của thành viên ${item} không hợp lệ.`
                  )
                  break;
                }
                case 'Phone_number': {
                  if (!checkValidTel(data[key]))
                  throw new Error(
                      `${key.replace('_',' ').toLowerCase()} của thành viên ${item} không hợp lệ.`
                  )
                  break;
                }
                case 'Student_card': {
                  if (!checkValidURL(data[key]))
                  throw new Error(
                      `${key.replace('_',' ').toLowerCase()} của thành viên ${item} không hợp lệ.`
                  )
                  break;
                }
                default: {
                  break;
                }
              }
          }    
          return data 
      })
      if ( !data.filter((item) => (item.isLeader === true )).length) {
          throw new Error(
              `Không tìm thấy tên của nhóm trưởng trong đội của bạn.`
          )
      }
       
     
      reqBody.data = data
      axios.post('/v1/candidate', reqBody)
      .then(function (response) {
       console.log(response);
     })
     .catch(function (error) {
       console.log(error.response)
     });
  }
  catch(err) {
      Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err.message,
          // footer: '<a href>Why do I have this issue?</a>'
        })
  }

}

function handleMemberSubmit() {
  try {
      var data =  [1, 2].map(function(item)  {
          var data = {
              Fullname: document.getElementById(`member${item}-name`).value || null,
              Birthdate: document.getElementById(`member${item}-birthDate`).value || null,
              Email: document.getElementById(`member${item}-email`).value || null,
              Phone_number: document.getElementById(`member${item}-tel`).value || null,
              University: document.getElementById(`member${item}-university`).value || null,
              Student_card: document.getElementById(`member${item}-student-card`).value || null
          }
          for (let key in data) {
              if (!data[key] && item === 1)  {
                  throw new Error(
                      ` Bạn chưa điền đầy đủ thông tin cho thành viên ${item}.`
                  )
              }
              else if (data[key]) {
                  switch (key) {
                      case 'Birthdate': {
                        if(!moment(data[key], 'DD/MM/YYYY', true).isValid()) {
                            throw new Error(
                                `${key.replace('_',' ').toLowerCase()} của thành viên ${item} không hợp lệ.`
                            )
                        }
                        break;
                      }
                      case 'Email': {
                        if (!checkValidEmail(data[key])) 
                        throw new Error(
                            `${key.replace('_',' ').toLowerCase()} của thành viên ${item} không hợp lệ.`
                        )
                        break;
                      }
                      case 'Phone_number': {
                        if (!checkValidTel(data[key]))
                        throw new Error(
                            `${key.replace('_',' ').toLowerCase()} của thành viên ${item} không hợp lệ.`
                        )
                        break;
                      }
                      case 'Student_card': {
                        if (!checkValidURL(data[key]))
                        throw new Error(
                            `${key.replace('_',' ').toLowerCase()} của thành viên ${item} không hợp lệ.`
                        )
                        break;
                      }
                      default: {
                        break;
                      }
                  }
              }
          }  
          return data
      })
      var reqBody = {
          Group_name:  null,
          Group_leader: null,
          data
      }
     
      axios.post('/v1/candidate/member', reqBody)
      .then(function (response) {
       console.log(response);
     })
     .catch(function (error) {
       console.log(error.response)
     });
  }
  catch(err) {
      Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err.message,
          // footer: '<a href>Why do I have this issue?</a>'
        })
  }
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
