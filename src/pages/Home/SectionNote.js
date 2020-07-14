import React from 'react';
 
import"../../css/style.css"

function SectionNote()
{
    return(
        <section className = "child-section" id="note-section">
            <img src={require("../../images/img-note.png")} alt="img_3"/>
            <div id="note-text-container">
                <h1>LƯU Ý DÀNH CHO THÍ SINH</h1>
                <p>
                    (i) Các đội thi được xem là hợp lệ nếu đăng ký dự thi tại Website chính thức
                    của cuộc thi từ ngày <span style={{fontWeight: 'bold'}} >17.04.2020</span> đến trước 
                    ngày <span style={{fontWeight: 'bold'}} >23:59</span> ngày <span style={{fontWeight: 'bold'}} >24.04.2020</span> (đối với đăng kí dự thi) 
                    và  <span style={{fontWeight: 'bold'}} >22.04.2020</span> (đối với đăng kí ghép nhóm);
                    <br></br>
                    
                
                    (ii) Đề thi vòng thi 01 của MARKETING ARENA 2020 sẽ được công bố vào ngày <span style={{fontWeight: 'bold'}} >17.04.2020</span> trên
                     Website chính thức của 
                    cuộc thi và Fanpage chính thức của CLB Creatio;
                    <br></br>
                
                    (iii) Thí sinh nộp bài vòng 1 qua Email chính thức của cuộc thi trước <span style={{fontWeight: 'bold'}} >23:59</span> ngày 
                    
                    <span style={{fontWeight: 'bold'}} >26.04.2020</span>. Cách thức và hình thức nộp
                    bài sẽ được công bố cụ thể trong đề bài.
                    <br></br>
                
                    (iv) Linh trên Website, Email và Fanpage được đề cập ở phần liên hệ.
                </p>
            </div>
        </section>
    )
}
export default SectionNote