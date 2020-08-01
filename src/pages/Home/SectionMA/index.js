import React from 'react';
import './style.scss'
function SectionMA() {
  return (
    <section className="child-section" id="ma-section">
       <div id="ma-content">
          <img className="ma-img" id="img-ma-2020" src={require("../../../images/ma2020/MA 2020.png")} alt="circle"/>
          <img className="ma-img" id="img-1" src={require("../../../images/ma2020/ruleEachRound/1.png")} alt="circle" data-aos="fade-up"/>
          <div id="subtitle" data-aos="fade-up">
              <p>Cuộc thi <span style={{color: "#FFCF00"}}>MARKETING ARENA 2020</span> sẽ chính thức khởi động từ ngày <span>16.08.2020 </span>và kết thúc vào ngày <span>27.09.2020</span>. Các đội thi sẽ được thử thách qua <span>03 chặng hành trình</span> chính với<span> 02 sự lựa chọn.</span></p> 
              <p><span>Lưu ý: 20 đội</span>  đăng ký dự thi <span>sớm nhất</span> sẽ được quyền <span>tự do lựa chọn đề</span>, các đội còn lại sẽ được BTC chỉ định đề thi.</p> 
          </div>
          <img className="ma-img" id="img-2" src={require('../../../images/ma2020/2.png')} alt="circle"/>
          <img className="ma-img" id="img-6" src={require('../../../images/ma2020/ruleEachRound/6.png')} alt="circle"/>
          <img className="ma-img" id="img-7" src={require('../../../images/ma2020/ruleEachRound/6.png')} alt="circle"/>
          <img style={{zIndex:'1'}} className="ma-img" id="img-8" src={require('../../../images/ma2020/ruleEachRound/6.png')} alt="circle"/>

        
       </div>
    </section>
  );
}

export default SectionMA;
