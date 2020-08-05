import React from 'react'
import './style.scss'

function SectionFooter(){
    return(
        <section className="child-section" id="footer-section">
            <div id="text">
                <img className="event-img" id="img-1" src={require("../../../images/footer/2.png")} alt="img_1"/>  
                    <p id="body">
                        <p id="hotline" className="text-container">
                          HOTLINE
                          <br></br>
                          <span style={{paddingLeft: "135px"}}>079 8399 887 (Mr. Nhật Thanh)</span>
                          <br></br>
                          <span style={{paddingLeft: "135px"}}>079 4250 899 (Mr. Hoàng Hải)</span>
                        </p>
                        <p id="email"  className="text-container">
                          EMAIL <span style={{paddingLeft: "90px"}} >marketingarena2020@gmail.com</span>       
                        </p>
                        <p id="fanpage"  className="text-container">
                          FANPAGE <span style={{paddingLeft: "59px"}} >http://www.facebook.com/creatioftu2/</span>       
                        </p>
                        <p id="website" className="text-container">
                          WEBSITE <span style={{paddingLeft: "109px"}}>marketingarena.info</span>           
                        </p>
                    
                    </p>
            </div>
            <img className="event-img" id="img-2" src={require("../../../images/footer/1.png")} alt="img_2"/>
        </section>
    )
}
export default SectionFooter;