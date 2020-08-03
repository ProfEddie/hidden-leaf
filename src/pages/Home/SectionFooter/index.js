import React from 'react'
import './style.scss'

function SectionFooter(){
    return(
        <section className="child-section" id="footer-section">
            <div id="text">
                <img className="event-img" id="img-1" src={require("../../../images/footer/2.png")} alt="img_1"/>  
                    <p id="body">
                        <p id="hotline">
                        HOTLINE
                        <br></br>
                        <span style={{paddingLeft: "82px"}}>079 8399 887 (Mr. Nhật Thanh)</span>
                        <br></br>
                        <span style={{paddingLeft: "82px"}}>079 4250 899 (Mr. Hoàng Hải)</span>
                        </p>
                        <p id="email">
                        EMAIL <span style={{paddingLeft: "44px"}} >marketingarena2020@gmail.com</span>       
                        </p>
                        <p id="fanpage">
                        FANPAGE <span style={{paddingLeft: "22px"}} >http://www.facebook.com/creatioftu2/</span>       
                        </p>
                        <p id="website">
                        WEBSITE <span style={{paddingLeft: "74px"}}>marketingarena.info</span>           
                        </p>
                    
                    </p>
            </div>
            <img className="event-img" id="img-2" src={require("../../../images/footer/1.png")} alt="img_2"/>
        </section>
    )
}
export default SectionFooter;