import React from 'react'
import './style.scss'

function SectionSponsor(){
    return(
        <section className="child-section" id="sponsor-section">
            <img src={require('../../../images/collaborators/1.png')} alt="img_1" id="title-img" data-aos="fade-up"/>
            <div id="top">
                <img className="sponsor-img" id="img-1" src={require("../../../images/sponsor/1.png")} alt="img_1"  data-aos="fade-up"/>
                <img className="sponsor-img" id="img-2" src={require("../../../images/sponsor/2.png")} alt="img_2"  data-aos="fade-up"/>
            </div>
            <div id="bot">
               <div id="left">
                   <img className="sponsor-img" id="img-3" src={require("../../../images/sponsor/3.png")} alt="img_3"  data-aos="fade-right"/>

                   <img className="sponsor-img" id="img-4" src={require("../../../images/sponsor/4.png")} alt="img_5"  data-aos="fade-right"/>
               </div>
               <div id="right">
                   <img className="sponsor-img" id="img-5" src={require("../../../images/sponsor/5.png")} alt="img_3" data-aos="fade-left"/>
                   <img className="sponsor-img" id="img-6" src={require("../../../images/sponsor/6.png")} alt="img_4"  data-aos="fade-left"/>
               </div>
            </div>
        </section>
    )
}
export default SectionSponsor;