import React from 'react'
import './style.scss'


function SectionEvent(){

    return(
        <section className="child-section" id="event-section">
            <img className="event-img" id="img-1" src={require("../../../images/events/1.png")} alt="img_1" data-aos-once="true" data-aos="fade-up"  data-aos-delay="500"/>
            <div id="top">
                <div id="top-text">
                    <p id="top-title">INFORMATION DAY</p>
                    <p id="top-body"  data-aos-once="true" data-aos="fade-in">
                        Buổi <span>“Information Day”</span> sẽ do Creatio tổ chức dưới hình thức online ngay 
                       sau khi đề vòng 01 được công bố. Với sự góp mặt của các diễn giả đầu ngành dày dặn kinh nghiệm,
                        Information Day hứa hẹn sẽ giúp các thí sinh thấu hiểu cặn kẽ hơn về <span>yêu cầu</span> và <span>quy trình làm bài</span>, 
                        đồng thời cung cấp nhiều <span>lời khuyên</span> mang tính <span>chuyên môn</span> cũng như những <span>trải nghiệm bổ ích</span>.
                   </p>
                    <button id="top-regist" type="submit" form="group-regiser-form" >Đăng kí tham dự Information Day</button>
                </div>
                <div className="img-container" style={{position: "relative"}}>
                    <img className="event-img" id="img-2" src={require("../../../images/events/10.png")} alt="img_2"/>
                    <img className="event-img" id="img-4" src={require("../../../images/events/2.png")} data-aos-once="true" data-aos="zoom-out"  data-aos-duration="500"  alt="img_4"/>
                </div>
            </div>
            <div id="bot">
                <div className="img-container" style={{position: "relative"}}>
                <img className="event-img" id="img-3" src={require("../../../images/events/11.png")} alt="img_3"/>
                <img className="event-img" id="img-4" src={require("../../../images/events/2.png")} style={{bottom: '5px'}} data-aos-once="true" data-aos="zoom-out" data-aos-duration="500" alt="img_4"/>
                </div>
                <div id="bot-text" >
                    <p id="bot-title">GALA NIGHT</p>
                    <p id="bot-body"  data-aos-once="true" data-aos="fade-in">
                      <span>Đêm Chung kết</span> mang đến cơ hội chứng kiến màn tranh tài gay cấn từ <span>06 đội chơi xuất sắc nhất</span>
                      . Những phần trình bày bùng nổ trong đêm Gala, các kế hoạch thực 
                      thi chiến dịch đột phá, màn chất vấn “căng não” đến từ BGK chuyên môn, các tác
                       phẩm sáng tạo xuất sắc nhất,… tất cả đều là những <span>trải nghiệm</span> vô cùng đáng giá 
                       cho quá trình <span>học hỏi</span> và <span>phát triển</span> bản thân của các <span>Marketers tương lai</span>.
                    </p>
                    <button id="bot-regist" type="submit" form="group-regiser-form" >Đăng kí tham dự Gala Night</button>
                </div>
            </div>
        </section>
            
    )
}

export default SectionEvent;