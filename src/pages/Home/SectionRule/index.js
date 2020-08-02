import React from 'react';
import './style.scss'
function SectionRule() {
  return (
    <section className="child-section" id="rule-section">
        <div id="rule-content">
          <img className="rule-img" id="img-1" src={require("../../../images/ma2020/rules/1.png")} alt="circle" data-aos="fade-down"/>
          <div id="rule-text" data-aos="fade-up">
            <img className="rule-img" id="img-5" src={require("../../../images/ma2020/rules/5.png")} alt="circle"/>
            <p>Nhóm dự thi gồm 03 thành viên, đều là công dân Việt Nam hợp pháp, đang là sinh viên theo học hoặc vừa tốt nghiệp trong năm 2020 tại các trường đại học, cao đẳng tại Việt Nam, có độ tuổi từ 18-24 tuổi.</p>
            <p>Mỗi thí sinh chỉ được quyền tham gia 01 nhóm thi.</p> 
            <p>Thành viên các đội dự thi từ các đội Quán quân, Á quân, Quý quân của cuộc thi MARKETING ARENA của các mùa trước sẽ không được đăng ký tham gia cuộc thi năm nay.</p>
            <p>Các thành viên trong Ban Tổ chức (BTC) cuộc thi thuộc CLB Marketing Creatio KHÔNG được phép dự thi MARKETING ARENA 2020 để đảm bảo tính minh bạch và công bằng.</p>
            <p>Trường hợp các đội thi trong TOP 20 & TOP 06 không sinh sống tại TP.HCM, BTC sẽ hỗ trợ và đảm bảo các bạn được nhận đầy đủ thông tin của các buổi Training, làm việc với Mentor. Đặc biệt TOP 06 sẽ được hỗ trợ chi phí (di chuyển và lưu trú) để tham dự đêm chung kết Gala Night tại TP.HCM.</p>
            <p>Thương hiệu NutiFood có quyền sử dụng ý tưởng của các đội thi cho các chiến dịch của mình.</p>
            <p>Mọi thắc mắc, khiếu nại về quyết định của BTC xin gửi về địa chỉ Email chính thức của cuộc thi.</p>
            <img className="rule-img" id="img-7" src={require("../../../images/ma2020/rules/5.png")} alt="circle"/>
          </div>
          
        </div>
        <div>
        <img className="rule-img" id="img-2" src={require("../../../images/ma2020/rules/2.png")} alt="circle"/>
          <img className="rule-img" id="img-6" src={require("../../../images/ma2020/rules/6.png")} alt="circle"/>
        </div>
       
    </section>
  );
}

export default SectionRule;
