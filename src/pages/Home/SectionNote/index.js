import React from 'react';
import './style.scss'
function SectionNote() {
  return (
    <section className="child-section" id="note-section">

       <div id="note-text-container">
       <img className="note-img" id="img-2" src={require("../../../images/ma2020/notes/2.png")} alt="img_2"  data-aos-once="true" data-aos="fade-left"   data-aos-duration="1500"/>
            <div id="box">
            
               <img className="note-img" id="img-1" src={require("../../../images/ma2020/notes/1.png")} alt="img_1"/>
                <p id="note-title">LƯU Ý DÀNH CHO THÍ SINH</p>

                <p id="note-content" data-aos-once="true" data-aos="fade-in"  data-aos-duration="500">
                (i) Các đội thi được xem là hợp lệ nếu đăng ký dự thi tại Website chính thức
                của cuộc thi từ ngày <span  >17.08.2020</span> đến trước 
                ngày <span  >23:59</span> ngày <span >22.08.2020</span><span style={{color: '#FFCF00'}}> (đối với đăng kí dự thi) </span>
                và  <span>20.08.2020</span><span style={{color: '#FFCF00'}}> (đối với đăng kí ghép nhóm);</span>
                <br></br>
                <br></br>
                <br></br>
                (ii) Đề thi vòng thi 01 của <span style={{color: '#FFCF00'}}>MARKETING ARENA 2020</span> sẽ được công bố vào ngày <span  >17.08.2020</span> trên
                 Website chính thức của 
                cuộc thi và Fanpage chính thức của CLB Creatio;
                <br></br>
                <br></br>
                <br></br>
                (iii) Thí sinh <span>nộp bài vòng 1</span> qua<span> Email</span> chính thức của cuộc thi <span>trước 23:59</span> ngày 
                
                <span  > 30.08.2020</span>. Cách thức và hình thức nộp
                bài sẽ được công bố cụ thể trong đề bài.
                <br></br>
                <br></br>
                <br></br>
                (iv) Linh trên<span> Website, Email</span> và<span> Fanpage</span> được đề cập ở phần <span>thông tin chi tiết.</span> 
               </p>        
    
            </div>
        </div>
        <img className="note-img" id="img-3" src={require("../../../images/ma2020/notes/3.png")} alt="img_3"/>
        <img className="note-img" id="img-4" src={require("../../../images/ma2020/notes/3.png")} alt="img_3"/>
    </section>
  );
}

export default SectionNote;