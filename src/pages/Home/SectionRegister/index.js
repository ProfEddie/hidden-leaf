import React,{useState} from 'react';
import './style.scss'
import Form from './components/StyledForm'
import Swal from 'sweetalert2'
import moment from 'moment'
import axios from 'axios'
function SectionRegister() {
  const [groupGender1, setGroupGender1] = useState('')
  const [groupGender2, setGroupGender2] = useState('')
  const [groupGender3, setGroupGender3] = useState('')
  const [gender1, setGender1] = useState('')
  const [gender2, setGender2] = useState('')
  function handleChangeGender (genderItem, selectedVal) {
    switch (genderItem) {
      case 'group-member1-gender': {
        setGroupGender1(selectedVal.value)
        break
      }
      case 'group-member2-gender': {
        setGroupGender2(selectedVal.value)
        break
      }
      case 'group-member3-gender': {
        setGroupGender3(selectedVal.value)
        break
      } 
      case 'member1-gender': {
        setGender1(selectedVal.value)
        break
      } 
      case 'member2-gender': {
        setGender2(selectedVal.value)
        break
      }
      default: {
        break
      }
    }
  };
  
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
      placeholder: 'Giới tính',
      type: 'select',
      id: 'group-member1-gender',
      isTitle: false,
      className: 'member',
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
      placeholder: 'Link Facebook',
      type: 'url',
      id: 'group-member1-facebook',
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
      placeholder: 'Giới tính',
      type: 'select',
      id: 'group-member2-gender',
      isTitle: false,
      className: 'member',
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
    },{
      placeholder: 'Link Facebook',
      type: 'url',
      id: 'group-member2-facebook',
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
      placeholder: 'Giới tính',
      type: 'select',
      id: 'group-member3-gender',
      isTitle: false,
      className: 'member',
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
    },{
      placeholder: 'Link Facebook',
      type: 'url',
      id: 'group-member3-facebook',
      isTitle: false,
      className: 'group',
      isRequired: true,
    },
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
      placeholder: 'Giới tính',
      type: 'select',
      id: 'member1-gender',
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
      placeholder: 'Link Facebook',
      type: 'url',
      id: 'member1-facebook',
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
      placeholder: 'Giới tính',
      type: 'select',
      id: 'member2-gender',
      isTitle: false,
      className: 'member',
      isRequired: true,
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
    },{
      placeholder: 'Link Facebook',
      type: 'url',
      id: 'member2-facebook',
      isTitle: false,
      className: 'group',
      isRequired: false,
    },
  ]
  function checkValidDate(date) {
    let res = 'invalid date';
    if (date) {
      var formats = ['YYYY-MM-DD','DD/MM/YYYY','D/M/YYYY','D/MM/YYYY', 'DD/M/YYYY' ]
      formats.forEach(function(format) {
         if (moment(date, format, true).isValid()) {
           res = moment(date, format, true).format();
           return false
         }
  
      })
      return res;
    }
    else {
      return null
    }
   

  }
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
              Birthdate: checkValidDate(document.getElementById(`group-member${item}-birthDate`).value || null),
              Email: document.getElementById(`group-member${item}-email`).value || null,
              Phone_number: document.getElementById(`group-member${item}-tel`).value || null,
              University: document.getElementById(`group-member${item}-university`).value || null,
              Student_card: document.getElementById(`group-member${item}-student-card`).value || null,
              isLeader: (reqBody.Group_leader === document.getElementById(`group-member${item}-name`).value) ? true : false,
              Gender: (item === 1 && groupGender1) || (item === 2 && groupGender2) || (item === 3 && groupGender3) || null,
              Facebook: document.getElementById(`group-member${item}-facebook`).value || null,
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
                case 'Birthdate': {
                  if (data[key] === 'invalid date') {
                    throw new Error(
                      `${key.replace('_',' ').toLowerCase()} của thành viên ${item} không hợp lệ.`
                  )
                  }
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
       } else if (error.response.data === 'facebook must be unique')  {
        Swal.fire(
          'Oops!',
          'Link facebook một thành viên đã bị trùng, hãy thử link khác nhé!',
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
            Birthdate: checkValidDate(document.getElementById(`member${item}-birthDate`).value||null),
             
            Email: document.getElementById(`member${item}-email`).value || null,
            Phone_number: document.getElementById(`member${item}-tel`).value || null,
            University: document.getElementById(`member${item}-university`).value || null,
            Student_card: document.getElementById(`member${item}-student-card`).value || null,
            Gender: (item === 1 && gender1) || (item === 2 && gender2) || null,
            Facebook: document.getElementById(`member${item}-facebook`).value || null,
          }
          console.log(data.Birthdate)



          for (let key in data) {
              if (data[key] === 'invalid date' && key === 'Birthdate' && item === 1) {
                throw new Error(
                  `Ngày sinh của thành viên ${item} không hợp lệ.`
                )
              }
              if (data[key] && item === 2) {
                switch (key) {
                  case 'Phone_number': {
                    if (!checkValidTel(data[key]))
                    throw new Error(
                        `${key.replace('_',' ').toLowerCase()} của thành viên ${item} không hợp lệ.`
                    )
                    break;
                  }
                   case 'Birthdate': {
                    if (data[key] === 'invalid date' ) {
                      throw new Error(
                        `Ngày sinh của thành viên ${item} không hợp lệ.`
                    )
                    }
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

                  document.getElementById(`member${item}-name`).required = false
                  document.getElementById(`member${item}-birthDate`).required = false
                  document.getElementById(`member${item}-email`).required = false
                  document.getElementById(`member${item}-tel`).required = false
                  document.getElementById(`member${item}-university`).required = false
                  document.getElementById(`member${item}-student-card`).required = false
                } else {
                  document.getElementById(`member${item}-name`).required = true
                  document.getElementById(`member${item}-birthDate`).required = true
                  document.getElementById(`member${item}-email`).required = true
                  document.getElementById(`member${item}-tel`).required = true
                  document.getElementById(`member${item}-university`).required = true
                  document.getElementById(`member${item}-student-card`).required = true
                  throw new Error(
                    `Hãy điền hết thông tin của thành viên 2`
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
      } else if (error.response.data === 'facebook must be unique')  {
        Swal.fire(
          'Oops!',
          'Link facebook một thành viên đã bị trùng, hãy thử link khác nhé!',
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
    Swal.fire(
      'Oops!',
       err.message,
      'error'
    )
  }
}

  return (
    <section className="child-section" id="register-section">
        <div id="register-content">
           <img className="register-img" id="img-1" src={require("../../../images/register/1.png")} alt="img_1" data-aos-once="true" data-aos="fade-up"  data-aos-duration="500" data-aos-delay="500"/>
           <img className="img-3" id="img-3-0" src={require("../../../images/register/3.png")} alt="img_3"/>
           <img className="img-3" id="img-3-1" src={require("../../../images/register/3.png")} alt="img_3"/>
           <img className="img-3" id="img-3-2" src={require("../../../images/register/3.png")} alt="img_3"/>
           <img className="img-3" id="img-3-3" src={require("../../../images/register/3.png")} alt="img_3"/>
           <img className="img-4" id="img-4-0" src={require("../../../images/register/4.png")} alt="img_4"/>
           <img className="img-4" id="img-4-1" src={require("../../../images/register/4.png")} alt="img_4"/>
           
           <div id="form-container">
              <div data-aos-once="true" data-aos="fade-right" >
                 <Form 
                    title="ĐĂNG KÍ DỰ THI"
                    data={groupRegistForm} 
                    formId="group-register-form" 
                    onSubmit={handleGroupSubmit} 
                    dueDate={moment.duration(moment('2020-08-28').diff(moment()))} 
                    handleChangeGender={handleChangeGender}
                    registerLink="https://creatiomarena.typeform.com/to/rJn9OPLd"
                  />
              </div>
                <div id="test-container">
                  <a id="test1" className="tests" href="https://drive.google.com/drive/folders/100IZwlCa5PeFz2pP2pwRKiByhlrTXKht?usp=sharing"> </a>
                  <img className="register-img" id="img-2" src={require("../../../images/register/2.png")} alt="img_2"/>
                  <a id="test2" className="tests" href="https://drive.google.com/drive/folders/1UEIJEFMgM2934eE_SxILXlmGpu-zuMau?usp=sharing"> </a>
                </div>
                
                <div data-aos-once="true" data-aos="fade-left">
                  <Form 
                    title="ĐĂNG KÍ GHÉP NHÓM" 
                    data={memberRegistForm} 
                    formId="member-register-form" 
                    onSubmit={handleMemberSubmit} 
                    dueDate={moment.duration(moment('2020-08-26').diff(moment()))} 
                    handleChangeGender={handleChangeGender} 
                    registerLink="https://creatiomarena.typeform.com/to/wYe3pNpQ"
                  />
                </div>
           </div>
        </div>
    </section>
  );
}

export default SectionRegister;
