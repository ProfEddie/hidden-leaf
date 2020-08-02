import React from 'react'
import './style.scss'

function SectionEvent(){
    return(
        <section className="child-section" id="event-section">
            <img className="event-img" id="img-1" src={require("../../../images/events/1.png")} alt="img_1"/>
            <div id="top">
                <div id="top-text">
                    <p id="top-title">INFORMATION DAY</p>
                    <p id="top-body">Buổi "Information Day" do Creatio tổ chức ngay khi đề vòng 01 được công bố
                    <br></br>
                    với sự góp mặt của các diễn giả đầu ngành dày dặn kinh nghiệm hứa hẹn sẽ
                    giúp các thí sinh thấu hiểu cặn kẽ hơn về yêu cầu và quy trình làm bài, đồng thời 
                    cung cấp nhiều lời khuyên mang tính chuyên môn cũng như trải nghiệm bổ ích.</p>
                    <p id="top-regist">Đăng kí tham dự Information Day</p>
                </div>
                    <img className="event-img" id="img-2" src={require("../../../images/events/10.png")} alt="img_2"/>
            </div>
            <div>
                <img className="event-img" id="img-3" src={require("../../../images/events/11.png")} alt="img_3"/>
                <div>
                    <p id="bot-title">GALA NIGHT</p>
                    <p id="bot-body">
                        Đêm Chung kết mang đến cơ hội được tận mắt chứng kiến cuộc tranh tài đặc sắc của 04
                        đội chơi ưu tú nhất. Bên cạnh đó 
                    </p>
                </div>
            </div>
        </section>
            
    )
}

export default SectionEvent;