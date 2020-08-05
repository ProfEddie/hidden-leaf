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
                    với sự góp mặt của các diễn giả đầu ngành dày dặn kinh nghiệm hứa hẹn sẽ
                    giúp các thí sinh thấu hiểu cặn kẽ hơn về yêu cầu và quy trình làm bài, đồng thời 
                    cung cấp nhiều lời khuyên mang tính chuyên môn cũng như trải nghiệm bổ ích.</p>
                    <button id="top-regist">Đăng kí tham dự Information Day</button>
                </div>
                    <img className="event-img" id="img-2" src={require("../../../images/events/10.png")} alt="img_2"/>
            </div>
            <div id="bot">
                <img className="event-img" id="img-3" src={require("../../../images/events/11.png")} alt="img_3"/>
                <div id="bot-text">
                    <p id="bot-title">GALA NIGHT</p>
                    <p id="bot-body">
                        Đêm Chung kết mang đến cơ hội được tận mắt chứng kiến cuộc tranh tài đặc sắc của 04 đội chơi ưu tú nhất. 
                        Bên cạnh đó, người tham dự
                        Gala Night còn có dịp chiêm ngưỡng các tác phẩm được trưng bày của Top 10 Cuộc thi Thiết kế “PRINT-ART” 
                        và có quyền bầu chọn cho tác phẩm mình yêu thích nhất.
                        <br></br>
                        <br></br>
                        Những phần trình bày tâm huyết trong đêm Gala, các kế hoạch thực thi chiến dịch vô cùng độc đáo, 
                        màn “hỏi xoáy – đáp xoay” kịch tính đến từ BGK chuyên 
                        môn, những tác phẩm sáng tạo xuất sắc nhất,… tất cả
                        những điều đó là những kiến thức vô cùng đáng giá để học hỏi và phát triển bản thân.
                    </p>
                    <button id="bot-regist">Đăng kí tham dự Gala Night</button>
                </div>
            </div>
        </section>
            
    )
}

export default SectionEvent;