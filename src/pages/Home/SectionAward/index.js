import React from 'react';
import './style.scss'
function SectionAward() {
  return (
    <section className="child-section" id="award-section">
      <img className="rule-img" id="img-1" src={require("../../../images/ma2020/awards/1.png")} alt="circle" data-aos-once="true" data-aos="fade-up"  data-aos-duration="500" data-aos-delay="500"/>
      <p><span>MARKETING ARENA 2020</span> là đấu trường tranh tài vô cùng hấp dẫn với tổng giá trị giải thưởng lên đến <span>400.000.000</span> đồng bao gồm</p>
      <img className="award-img" id="img-award" src={require("../../../images/ma2020/awards/awards.png")} alt="circle" data-aos-once="true" data-aos="fade-right"/>
       
    </section>
  );
}

export default SectionAward;