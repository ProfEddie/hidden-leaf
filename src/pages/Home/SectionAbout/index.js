import React from 'react'
import  './style.scss'

export default function AboutSection() {
    return (
        <div className="child-section" id="about-section">
            <div id="imgs">
               <img id="img-1" src={require('../../../images/aboutUs/4.png')} alt="about_1"></img>
               <p></p>
               <img id="img-circle" src={require('../../../images/aboutUs/1.png')} alt="about_circle"></img>
               <img id="img-dot" src={require('../../../images/aboutUs/2.png')} alt="about_dot"></img>
            </div>
            <div id="not-image">
                <img id="img-2" src={require('../../../images/aboutUs/8.png')} alt="about_2"></img>
                <div id="graph">
                    <img  id="img-3" src={require('../../../images/aboutUs/6.png')} alt="about_3"></img>
                    <p style={{lineHeight: "22px"}}>
                       <span style={{fontWeight: "bold"}}>Lòng hiếu kì</span> chính là niềm cảm hứng vô tận của mỗi người
                       trong hành trình khám phá những điều bí ẩn. Một câu hỏi lớn được đặt ra, khơi dậy sự tò mò của các
                       bạn trẻ trong việc tìm kiếm đáp án chính xác - <span style={{fontWeight: "bold", color: "gold"}}>MARKETING ARENA 2020 </span>
                       đã chính thức quay trở lại, tiếp nối chặng đường thành công của 4 mùa trước. Với thông điệp <span style={{fontWeight: "bold"}}>"Who Wonder Do Wonders", </span>
                       cuộc thi năm nay chính là sân chơi cho các Marketers dám biến suy nghĩ thành hàng động , thỏa mãn sự tò mò
                       bằng cách dấn mình vào hành trình giải mã bản thân và trau dồi những giá trị đáng quý.
                    </p>
                </div>
                <img  id="img-4" src={require('../../../images/aboutUs/7.png')} alt="about_4"></img>
            </div>
        </div>
    )
    
}