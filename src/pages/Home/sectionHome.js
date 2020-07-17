import React from 'react';
import './style.scss'
function SectionHome() {
  return (
    <section className="child-section" id="home-section">
       <img src={require('../../images/section1_bg.png')} alt="bg_1"/>
       <div>
           <p>MARKETING ARENA 2020</p>
           <p>Thời gian diễn ra</p>
           <p>14.04.2020 - 25.05.2020</p>

       </div>
    </section>
  );
}

export default SectionHome;
