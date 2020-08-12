import React from 'react';
import './style.scss'
function SectionRule() {
  return (
    <section className="child-section" id="rule-section">
        <div id="rule-content">
          <img className="rule-img" id="img-1" src={require("../../../images/ma2020/rules/1.png")} alt="circle" data-aos-once="true" data-aos="fade-up" data-aos-duration="500"  data-aos-delay="500"/>
          <div id="rule-text" data-aos-once="true" data-aos="fade-zoom-in"  data-aos-easing="ease-in-back"  data-aos-duration="500">
            <img className="rule-img" id="img-5" src={require("../../../images/ma2020/rules/5.png")} alt="circle"/>
            <p>Nhóm dự thi gồm <span>03 thành viên</span>, đều là<span> công dân Việt Nam hợp pháp</span>, đang là <span>sinh viên</span> theo học hoặc <span>vừa tốt nghiệp</span> trong năm <span>2020 </span>tại các trường <span>đại học, cao đẳng tại Việt Nam</span>, có độ tuổi từ <span>18-24</span> tuổi.</p>
            <p><span>Mỗi thí sinh </span>chỉ được quyền tham gia <span>01 nhóm thi.</span></p> 
            <p>Thành viên các đội dự thi từ các đội <span>Quán quân, Á quân, Quý quân</span> của cuộc thi <span style={{color: "#ffcf00"}}>MARKETING ARENA</span> của <span>các mùa trước</span> sẽ <span>không</span> được đăng ký tham gia cuộc thi năm nay.</p>
            <p>Các thành viên trong <span>Ban Tổ chức (BTC)</span> cuộc thi thuộc CLB Marketing Creatio <span>KHÔNG</span> được phép dự thi <span style={{color: "#ffcf00"}}>MARKETING ARENA 2020</span> để đảm bảo tính <span>minh bạch</span> và <span>công bằng.</span></p>
            <p>Trường hợp các đội thi trong <span>TOP 20 & TOP 06 không sinh sống tại TP.HCM, BTC </span> sẽ <span>hỗ trợ và đảm bảo</span> các bạn được nhận <span>đầy đủ thông tin</span> của các buổi <span>Training</span>, làm việc với <span>Mentor</span>. Đặc biệt <span>TOP 06</span> sẽ được <span>hỗ trợ chi phí</span> (di chuyển và lưu trú) để tham dự đêm chung kết <span>Gala Night</span> tại TP.HCM.</p>
            <p>Thương hiệu <span>NutiFood</span> có quyền <span>sử dụng ý tưởng</span> của các đội thi cho các chiến dịch của mình.</p>
            <p>Ban Tổ Chức (BTC) chương trình có <span>quyền hủy bỏ kết quả</span> của đội thi nếu phát hiện bất kỳ <span>hành vi gian lận</span> nào trong quá trình diễn ra cuộc thi.</p>
            <p>Mọi <span>thắc mắc, khiếu nại</span> về quyết định của BTC xin gửi về địa chỉ <span>Email chính thức</span> của cuộc thi.</p>
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
