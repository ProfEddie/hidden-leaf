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
            <div id="about-content">
                <img id="img-2" src={require('../../../images/aboutUs/8.png')} alt="about_2"></img>
                <div id="graph">
                    <img  id="img-3" src={require('../../../images/aboutUs/6.png')} alt="about_3" data-aos="fade-up" data-aos-duration="500" data-aos-delay="500"></img>
                    <p style={{lineHeight: "22px" }} data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="500"  >
                       <span >Lòng hiếu kì</span> chính là niềm cảm hứng vô tận của mỗi người
                       trong hành trình khám phá những điều bí ẩn. Một câu hỏi lớn được đặt ra, khơi dậy sự tò mò của các
                       bạn trẻ trong việc tìm kiếm đáp án chính xác - <span style={{color: '#FFCF00'}}>MARKETING ARENA 2020 </span>
                       đã chính thức quay trở lại, tiếp nối chặng đường thành công của 4 mùa trước. Với thông điệp <span >"Who Wonder Do Wonders", </span>
                       cuộc thi năm nay chính là sân chơi cho các Marketers dám biến suy nghĩ thành hàng động , thỏa mãn sự tò mò
                       bằng cách dấn mình vào hành trình giải mã bản thân và trau dồi những giá trị đáng quý.
                       <br></br>
                       <br></br>
                       Đặc biệt, mùa thi năm nay còn chứng kiến sự thay đổi mới mẻ trong đề thi và thể lệ các vòng. Lần đầu tiên, <span>MARKETING ARENA </span>
                       có đến <span>02 đề thi</span> về hai <span>chuyên môn riêng biệt</span> rong lĩnh vực Marketing, bao gồm: xây dựng chiến dịch truyền thông 
                       tích hợp nhằm giải quyết bài toán của thương hiệu và thiết lập kế hoạch phát triển sản phẩm mới để mở rộng phân khúc thị trường của công ty. 
                    </p>
                </div>
                <img  id="img-4" src={require('../../../images/aboutUs/7.png')} alt="about_4"></img>
            </div>
        </div>
    )
    
}