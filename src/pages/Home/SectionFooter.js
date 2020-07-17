import React from 'react'
 
import "./Footer.scss"

function Footer() {
    return(
        <section className = "child-section" id="footer-section">
            <h1>LIÊN HỆ</h1>
            <div id="footer-text-container">
            <span style={{color: "white"}}>Mọi chi tiết vui lòng liên hệ</span>
            <div id="text">
                <p>HOTLINE:
                <br></br>
                <span style={{paddingLeft: "86px"}}>0909 767 016 (Mr. Nhiên Đằng)</span>
                <br></br>
                <span style={{paddingLeft: "86px"}}>0367 975 455 (Ms. Bình Minh)</span>
                </p>
                </div>
            <div id="text">
                <p>EMAIL:
                <span style={{paddingLeft: "31px"}} >marketingarena2020@gmail.com</span>
                </p>
                </div>
            <div id="text">
                <p>FANPAGE:
                <span style={{paddingLeft: "3px"}}>https://www.facebook.com/creatioftu2/</span>
                </p>
                </div>
            <div id="text">
                <p>WEBISTE:
                <span style={{paddingLeft: "50px"}}>marketingarena.info</span>
                </p>
                </div>
            </div>
            <img src={require("../../images/img-footer.png")} alt="img_4"/>
        </section>
    )}

export default Footer