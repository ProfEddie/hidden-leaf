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
      type: 'date',
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
      type: 'date',
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
      type: 'date',
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
      type: 'date',
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
      type: 'date',
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

  function checkValidTel(tel) {
    const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
    return re.test(String(tel));
  }

function handleGroupSubmit(e) {
  e.preventDefault();
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
                case 'Phone_number': {
                  if (!checkValidTel(data[key]))
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
        Swal.fire(
          'Success!',
          'Bạn đã đăng ký thành công!',
          'success'
        )

     })
     .catch(function (error) {
       console.log(error.response.data)
       if (error.response.data === 'email must be unique')  {
        Swal.fire(
          'Oops!',
          'Email một thành viên của nhóm bạn đã bị trùng, hãy thử email khác nhé!',
          'error'
        )
       }
       else if (error.response.data === 'phone_number must be unique')  {
        Swal.fire(
          'Oops!',
          'Số điện thoại một thành viên của nhóm bạn đã bị trùng, hãy thử số khác nhé!',
          'error'
        )
       }
       else if (error.response.data === 'group_name must be unique')  {
        Swal.fire(
          'Oops!',
          'Tên nhóm đã bị trùng, tìm tên khác cho nhóm của bạn nhé!',
          'error'
        )
       }
       else {
        Swal.fire(
          'Oops!',
          'Đã có lỗi xảy ra, vui lòng thử lại sau',
          'error'
        )
       }
      
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

function handleMemberSubmit(e) {
  e.preventDefault();
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
              if (data[key] && item === 2) {
                console.log('trigger')
               
                switch (key) {
                  case 'Phone_number': {
                    if (!checkValidTel(data[key]))
                    throw new Error(
                        `${key.replace('_',' ').toLowerCase()} của thành viên ${item} không hợp lệ.`
                    )
                    break;
                  }
                  default: {
                    break;
                  }
                }
                if ((
                    !document.getElementById(`member${item}-name`).value &&
                    !document.getElementById(`member${item}-birthDate`).value &&
                    !document.getElementById(`member${item}-tel`).value && 
                    !document.getElementById(`member${item}-email`).value &&
                    !document.getElementById(`member${item}-university`).value && 
                    !document.getElementById(`member${item}-student-card`).value
                  ) || (
                    document.getElementById(`member${item}-name`).value &&
                    document.getElementById(`member${item}-birthDate`).value &&
                    document.getElementById(`member${item}-tel`).value && 
                    document.getElementById(`member${item}-email`).value &&
                    document.getElementById(`member${item}-university`).value && 
                    document.getElementById(`member${item}-student-card`).value
                  )
                 
                ) {
                } else {
                  document.getElementById(`member${item}-name`).required = true
                  document.getElementById(`member${item}-birthDate`).required = true
                  document.getElementById(`member${item}-email`).required = true
                  document.getElementById(`member${item}-tel`).required = true
                  document.getElementById(`member${item}-university`).required = true
                  document.getElementById(`member${item}-student-card`).required = true
                  throw new Error(
                    `${key.replace('_',' ').toLowerCase()} của thành viên ${item} không hợp lệ.`
                  )
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
        Swal.fire(
          'Success!',
          'Bạn đã đăng ký thành công!',
          'success'
        )
       }
     )
     .catch(function (error) {
      if (error.response.data === 'email must be unique')  {
        Swal.fire(
          'Oops!',
          'Email một thành viên của nhóm bạn đã bị trùng, hãy thử email khác nhé!',
          'error'
        )
       }
       else if (error.response.data === 'phone_number must be unique')  {
        Swal.fire(
          'Oops!',
          'Số điện thoại một thành viên của nhóm bạn đã bị trùng, hãy thử số khác nhé!',
          'error'
        )
      }
       else {
        Swal.fire(
          'Oops!',
          'Đã có lỗi xảy ra, vui lòng thử lại sau',
          'error'
        )
       }
      
     });
  }
  catch(err) {
  }
}

  return (
    <section className="child-section" id="register-section">
        <div id="register-content">
           <img className="register-img" id="img-1" src={require("../../../images/register/1.png")} alt="img_1" data-aos="fade-up" data-aos-duration="500" data-aos-delay="500"/>
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
