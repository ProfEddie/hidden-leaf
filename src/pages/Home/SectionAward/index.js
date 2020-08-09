import React from 'react';
import './style.scss'
function SectionAward() {
  return (
    <section className="child-section" id="award-section">
      <img className="rule-img" id="img-1" src={require("../../../images/ma2020/awards/1.png")} alt="circle" data-aos="fade-up" data-aos-duration="500" data-aos-delay="500"/>
      <div id="awards-content">
          <div className="img-container">
            <img className="award-img" id="img-2" src={require("../../../images/ma2020/awards/2.png")} alt="circle" data-aos="fade-right"/>
            <p>STRATEGY</p>
          </div>
       
          <div className="img-container">
            <img className="award-img" id="img-2" src={require("../../../images/ma2020/awards/3.png")} alt="circle" data-aos="fade-left"/>
            <p>CREATIVE</p>
          </div>
      </div>
    </section>
  );
}

export default SectionAward;