import React from 'react';
import CustomizedInput from '../../Components/Input'
import CustomizedInput2 from '../../Components/Input2'
import './SectionForm.scss'

export default function SectionForm() {
    return (
        <section className="child-section" id="form-section">
         <div id="form-section-container">
          <h3 style={{color: 'white', marginBottom:'50px'}}>FORM</h3>
         <div id="form-section-content">
             <form className="form" id="register-form">
                 <p>ĐĂNG KÝ DỰ THI</p>
								 <div className="form-group" 
								       style={
												 {height: '312px',display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center',
													alignItems: 'center'
									}}>
                   <CustomizedInput inputId='team-name' label='Tên team' type='text'/>
                   <CustomizedInput inputId='team-leader' label='Tên leader' type='text'/>
                   <div id="member-form">
                       <p>Thành viên 1</p>
                        <div className="input-container">
                          <CustomizedInput2 inputId='fullname-group' label='Họ tên' type='text' isRequired={true}/>
													<CustomizedInput2 inputId='birthdate-group' label='Ngày sinh' type='date' isRequired={true}/>
													<CustomizedInput2 inputId='university-group' label='Trường' type='text' isRequired={true}/>
													<CustomizedInput2 inputId='email-group' label='Email' type='email' isRequired={true}/>
													<CustomizedInput2 inputId='phone-num-group' label='SĐT' type='tel' isRequired={true}/>
													<CustomizedInput2 inputId='student-card-group' label='Thẻ sinh viên' type='url' isRequired={true}/>
                        </div>
                      <p>Thành viên 2</p>
                       <div className="input-container">
											 <CustomizedInput2 inputId='fullname-group-1' label='Họ tên' type='text' isRequired={true}/>
													<CustomizedInput2 inputId='birthdate-group-1' label='Ngày sinh' type='date' isRequired={true}/>
													<CustomizedInput2 inputId='university-group-1' label='Trường' type='text' isRequired={true}/>
													<CustomizedInput2 inputId='email-group-1' label='Email' type='email' isRequired={true}/>
													<CustomizedInput2 inputId='phone-num-group-1' label='SĐT' type='tel' isRequired={true}/>
													<CustomizedInput2 inputId='student-card-group-1' label='Thẻ sinh viên' type='url' isRequired={true}/>

                      </div>
                       <p>Thành viên 3</p>
                       <div className="input-container">
											 <CustomizedInput2 inputId='fullname-group-2' label='Họ tên' type='text' isRequired={true}/>
													<CustomizedInput2 inputId='birthdate-group-2' label='Ngày sinh' type='date' isRequired={true}/>
													<CustomizedInput2 inputId='university-group-2' label='Trường' type='text' isRequired={true}/>
													<CustomizedInput2 inputId='email-group-2' label='Email' type='email' isRequired={true}/>
													<CustomizedInput2 inputId='phone-num-group-2' label='SĐT' type='tel' isRequired={true}/>
													<CustomizedInput2 inputId='student-card-group-2' label='Thẻ sinh viên' type='url' isRequired={true}/>
                       </div>
                   </div>
                 </div>
                 <input type='submit' className='submit-button' value='Đăng ký'/>

             </form>
             <form className="form" id="group-form">
                 <p >ĐĂNG KÝ GHÉP NHÓM</p>
                 <div className="form-group" style={{maxHeight:'305px', overflowY: "scroll"}}>
									 <div className="form-group-content">
									 <CustomizedInput inputId='fullname' label='Họ và tên' type='text' isRequired={true}/>
                   <CustomizedInput inputId='birthdate' label='Ngày sinh' type='date' isRequired={true}/>
                   <CustomizedInput inputId='university' label='Trường' type='text' isRequired={true}/>
                   <CustomizedInput inputId='phone-num' label='SĐT liên lạc' type='tel' isRequired={true}/>
                   <CustomizedInput inputId='email' label='Email' type='email' isRequired={true}/>
                   <CustomizedInput inputId='student-card' label='Thẻ sinh viên' type='url' isRequired={true}/>
									 </div>
									 <div className="form-group-content">
									 <CustomizedInput inputId='fullname-2' label='Họ và tên' type='text' isRequired={false}/>
                   <CustomizedInput inputId='birthdate-2' label='Ngày sinh' type='date' isRequired={false}/>
                   <CustomizedInput inputId='university-2' label='Trường' type='text' isRequired={false}/>
                   <CustomizedInput inputId='phone-num-2' label='SĐT liên lạc' type='tel' isRequired={false}/>
                   <CustomizedInput inputId='email-2' label='Email' type='email' isRequired={false}/>
                   <CustomizedInput inputId='student-card-2' label='Thẻ sinh viên' type='url' isRequired={false}/>
									 </div>
                  
								
                 </div>
                 <input type='submit' className='submit-button' value='Đăng ký'/>
             </form>
          </div>
         </div>
         
        </section>
    )
}