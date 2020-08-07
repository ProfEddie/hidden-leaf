import React from 'react'
import './style.scss'

function SectionSponsor(){
    return(
        <section className="child-section" id="sponsor-section">
            <img className="sponsor-img" id="img-1" src={require("../../../images/collaborators/1.png")} alt="img_1"/>
            <div id="bot">
                <div id="left">
                    <p id="ntt">NHÀ TÀI TRỢ</p>
                    <img className="sponsor-img" id="img-2" src={require("../../../images/sponsor/2.png")} alt="img_2"/>
                </div>
                <div id="right">
                    <p id="btcm">BẢO TRỢ CHUYÊN MÔN</p>
                    <img className="sponsor-img" id="img-3" src={require("../../../images/sponsor/1.png")} alt="img_3"/>
                    <p id="bttt">BẢO TRỢ TRUYỀN THÔNG</p>
                    <img className="sponsor-img" id="img-4" src={require("../../../images/sponsor/3.png")} alt="img_4"/>
                </div>
            </div>
        </section>
    )
}
export default SectionSponsor;