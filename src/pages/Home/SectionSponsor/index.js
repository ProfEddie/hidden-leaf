import React from 'react'
import './style.scss'

function SectionSponsor(){
    return(
        <section className="child-section" id="sponsor-section">
            <img src={require('../../../images/collaborators/1.png')} alt="img_1" id="title-img" data-aos="fade-up" data-aos-once="true"/>
            <div id="top">
                <div className="sponsor-container" data-aos="fade-up"  data-aos-once="true"> 
                   <p>ĐƠN VỊ TỔ CHỨC</p>
                   <img className="sponsor-img" id="img-1" src={require("../../../images/sponsor/1.png")} alt="img_1"  />
                </div>
                <div className="sponsor-container"  data-aos="fade-up"  data-aos-once="true"> 
                   <p>NHÀ TÀI TRỢ KIM CƯƠNG</p>
                   <img className="sponsor-img" id="img-2" src={require("../../../images/sponsor/2.png")} alt="img_2"/>
                </div>
               
            </div>
            <div id="bot">
               <div id="left">
               <div className="sponsor-container" data-aos="fade-right"  data-aos-once="true">
                  <p>NHÀ TÀI TRỢ VÀNG</p>
                  <img className="sponsor-img" id="img-3" src={require("../../../images/sponsor/3.png")} alt="img_3"  />
               </div>
               <div className="sponsor-container" id="silver" data-aos="fade-right"  data-aos-once="true">
                  <p>NHÀ TÀI TRỢ BẠC</p>
                  <img className="sponsor-img" id="img-7" src={require("../../../images/sponsor/7.png")} alt="img_5"  />
               </div>
               </div>
               <div id="right">
                   <div className="sponsor-container" data-aos="fade-left"  data-aos-once="true">
                      <p>NHÀ TÀI TRỢ ĐỒNG</p>
                      <img className="sponsor-img" id="img-4" src={require("../../../images/sponsor/4.jpg")} alt="img_3" />
                      <p>ĐỐI TÁC CHIẾN LƯỢC</p>
                      <img className="sponsor-img" id="img-5" src={require("../../../images/sponsor/5.png")} alt="img_3" />
                   </div>
                   <div className="sponsor-container"  data-aos="fade-left"  data-aos-once="true">
                        <p>BẢO TRỢ TRUYỀN THÔNG</p>
                       <img className="sponsor-img" id="img-6" src={require("../../../images/sponsor/6.png")} alt="img_4" />
                   </div>
               </div>
            </div>
        </section>
    )
}
export default SectionSponsor;