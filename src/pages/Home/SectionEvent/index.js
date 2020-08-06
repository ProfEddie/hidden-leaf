import React from 'react'
import './style.scss'
import Swal from 'sweetalert2'
import moment from 'moment'
import axios from 'axios'

function SectionEvent(){
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
    
    function getGroupFormData() {
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
                    Student_card: document.getElementById(`group-member${item}-student-card`).value || null
                }
                for (let key in data) {
                    if (!data[key])  {
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
           
            reqBody.data = data
            return reqBody
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

    function getMemberFormData() {
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
                data
            }
            return reqBody
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

    function handleFormSubmit() {
        
       var groupForm= document.getElementById('group-register-form')
       var memberForm = document.getElementById('member-register-form')

       console.log(groupForm.className)
       console.log(memberForm.className)
       if (groupForm.className === 'form active') {
           let groupData = getGroupFormData();
           if(groupData) {
               console.log(groupData)
               .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
            }
       }
       else if (memberForm.className === 'form active') {
           let memberData = getMemberFormData();
            if(memberData) {
              axios.post('/candidate', memberData)
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
            }
        }
       else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Bạn vui lòng chọn một trong hai phương thức đăng ký trên nhé!',
            // footer: '<a href>Why do I have this issue?</a>'
          })
       }
    }
    return(
        <section className="child-section" id="event-section">
            <img className="event-img" id="img-1" src={require("../../../images/events/1.png")} alt="img_1" data-aos="fade-up"/>
            <div id="top">
                <div id="top-text">
                    <p id="top-title">INFORMATION DAY</p>
                    <p id="top-body"  data-aos="fade-in">Buổi "Information Day" do Creatio tổ chức ngay khi đề vòng 01 được công bố
                    với sự góp mặt của các diễn giả đầu ngành dày dặn kinh nghiệm hứa hẹn sẽ
                    giúp các thí sinh thấu hiểu cặn kẽ hơn về yêu cầu và quy trình làm bài, đồng thời 
                    cung cấp nhiều lời khuyên mang tính chuyên môn cũng như trải nghiệm bổ ích.</p>
                    <button id="top-regist" type="submit" form="group-regiser-form" onClick={handleFormSubmit}>Đăng kí tham dự Information Day</button>
                </div>
                    <img className="event-img" id="img-2" src={require("../../../images/events/10.png")} alt="img_2"/>
            </div>
            <div id="bot">
                <img className="event-img" id="img-3" src={require("../../../images/events/11.png")} alt="img_3"/>
                <div id="bot-text" >
                    <p id="bot-title">GALA NIGHT</p>
                    <p id="bot-body"  data-aos="fade-in">
                        Đêm Chung kết mang đến cơ hội được tận mắt chứng kiến cuộc tranh tài đặc sắc của 04 đội chơi ưu tú nhất. 
                        Bên cạnh đó, người tham dự
                        Gala Night còn có dịp chiêm ngưỡng các tác phẩm được trưng bày của Top 10 Cuộc thi Thiết kế “PRINT-ART” 
                        và có quyền bầu chọn cho tác phẩm mình yêu thích nhất.
                        <br></br>
                        <br></br>
                        Những phần trình bày tâm huyết trong đêm Gala, các kế hoạch thực thi chiến dịch vô cùng độc đáo, 
                        màn “hỏi xoáy – đáp xoay” kịch tính đến từ BGK chuyên 
                        môn, những tác phẩm sáng tạo xuất sắc nhất,… tất cả
                        những điều đó là những kiến thức vô cùng đáng giá để học hỏi và phát triển bản thân.
                    </p>
                    <button id="bot-regist" type="submit" form="group-regiser-form" onClick={handleFormSubmit}>Đăng kí tham dự Gala Night</button>
                </div>
            </div>
        </section>
            
    )
}

export default SectionEvent;