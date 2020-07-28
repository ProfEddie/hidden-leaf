import React from 'react';
import './style.scss'
function SectionHome() {
  return (
    <section className="child-section" id="home-section">
      <img className="home-img" id="img-1" src={require('../../../images/home/1.png')} alt="circle"></img>
      <div id="title-container" >
        <img className="home-img" id="img-2" src={require('../../../images/home/2.png')} alt="circle"></img>
        <div>
          <img className="home-img" id="img-5" src={require('../../../images/home/5.png')} alt="circle"></img>
          <div>
            <img className="home-img" id="img-3" src={require('../../../images/home/3.png')} alt="circle"></img>
            <img className="home-img" id="img-4" src={require('../../../images/home/4.png')} alt="circle"></img>
          </div>
        </div>
        <img className="home-img" id="img-7" src={require('../../../images/home/7.png')} alt="circle"></img>
      </div>
      <img className="home-img" id="img-6" src={require('../../../images/home/6.png')} alt="circle"></img>
      <img className="home-img" id="img-7" src={require('../../../images/home/7.png')} alt="circle"></img>
      <img className="home-img" id="img-8" src={require('../../../images/home/8.png')} alt="circle"></img>
      <img className="home-img" id="img-9" src={require('../../../images/home/9.png')} alt="circle"></img>
    </section>
  );
}

export default SectionHome;
