import React from 'react'
import './style.scss'

function SectionFooter(){
    return(
        <section className="child-section" id="footer-section">
            <div id="text">
                <img className="event-img" id="img-1" src={require("../../../images/footer/2.png")} alt="img_1" />  
                    <div id="body">
                        <p id="hotline" className="text-container">
                          HOTLINE
                          <br></br>
                          <span style={{paddingLeft: "24%"}}>079 8399 887 (Mr. Nhật Thanh)</span>
                          <br></br>
                          <span style={{paddingLeft: "24%"}}>090 5585 564 (Mr. Phước Thiện)</span>
                        </p>
                        <p id="email"  className="text-container">
                          EMAIL <span style={{paddingLeft: "17%"}} >marketingarena2020@gmail.com</span>       
                        </p>
                        <p id="fanpage"  className="text-container">
                          FANPAGE <span style={{paddingLeft: "14%"}} >http://www.facebook.com/creatioftu2/</span>       
                        </p>
                        <p id="website" className="text-container">
                          WEBSITE <span style={{paddingLeft: "15%"}}>marketingarena.info</span>           
                        </p>
                    
                    </div>
            </div>
            <img className="event-img" id="img-2" src={require("../../../images/footer/1.png")} alt="img_2" data-aos="fade-left" data-aos-duration="500"/>
        </section>
    )
}
export default SectionFooter;