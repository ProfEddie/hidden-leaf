import React from 'react';
import './style.css'
function SectionHome() {
  return (
    <section className="child-section" id="home-section">
       <img src={require('../../images/section1_bg.png')} alt="bg_1"/>
    </section>
  );
}

export default SectionHome;
