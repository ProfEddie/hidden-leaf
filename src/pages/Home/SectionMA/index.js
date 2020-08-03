import React from 'react';
import './style.scss'
function SectionMA() {
  return (
    <section className="child-section" id="ma-section">
       <div id="ma-content">
          <img className="ma-img" id="img-ma-2020" src={require("../../../images/ma2020/MA 2020.png")} alt="circle"/>
          <img className="ma-img" id="img-1" src={require("../../../images/ma2020/ruleEachRound/1.png")} alt="circle" data-aos="fade-up"/>
          <div id="subtitle" data-aos="fade-up">
              <p>Cuộc thi <span style={{color: "#FFCF00"}}>MARKETING ARENA 2020</span> sẽ chính thức khởi động từ ngày <span>16.08.2020 </span>và kết thúc vào ngày <span>27.09.2020</span>. Các đội thi sẽ được thử thách qua <span>03 chặng hành trình</span> chính với<span> 02 sự lựa chọn.</span></p> 
              <p><span>Lưu ý: 20 đội</span>  đăng ký dự thi <span>sớm nhất</span> sẽ được quyền <span>tự do lựa chọn đề</span>, các đội còn lại sẽ được BTC chỉ định đề thi.</p> 
          </div>
          {/* <img className="ma-img" id="img-2" src={require('../../../images/ma2020/2.png')} alt="circle"/> */}
           <div id="rule-each-round-container">
              <img src={require('../../../images/ma2020/ruleEachRound/2.png')} id="img-2" alt="svg"/>
              <img src={require('../../../svg/ma-2.svg')} id="svg-2" alt="svg"/>
              {/* <img src={require('../../../svg/ma-1.svg')} id="svg-1" alt="svg"/> */}
              <img src={require('../../../images/ma2020/ruleEachRound/5.png')} id="svg-3" alt="svg"/>
              <img src={require('../../../svg/ma-4.svg')} id="svg-4" alt="svg"/>
              <img src={require('../../../svg/ma-5.svg')} id="svg-5" alt="svg"/>
              <div id="rounds-container">
                <div className="round-container">
                  <div className="datetime-container">
                    <span>23.08</span>
                    <img src={require('../../../svg/ma-6.svg')} id="svg-6" alt="svg"/>
                    <span>30.08</span>
                  </div>
                  <div className="yellow-full-round">
                    <p className="title">Vòng 1</p>
                    <p className="subtitle">Data Analysis</p>
                  </div>
                  <p className="date">23.08</p>
                  <div className="white-full-round">
                    <p id="title">Information Day</p>
                  </div>
                  <p className="text-container">
                      Chọn ra <span>Top 10</span> xuất sắc nhất của mỗi đề.
                    </p>
                </div>
                <img className="circle-img" src={require('../../../images/ma2020/ruleEachRound/3.png')} alt="circle"/>

                <div className="round-container">
                    <div id="round-2-container">
                      <div className="round-2-child" style={{alignItems:'flex-end'}} data-aos="fade-right">
                        <div className="yellow-full-round"  style={{paddingRight: '22px',alignItems:'flex-end'}}>
                          <p className="title">Vòng 2</p>
                          <p className="subtitle"><span>Xây dựng kế hoạch</span></p>
                          <p className="subtitle">Marketing truyền thông tích hợp</p>
                        </div>
                         <span className="date" style={{marginTop: "17px"}}>7:00 PM 14.09</span>
                         <div className="white-full-round" style={{paddingRight: '25px',height: "63px", alignItems:'flex-end'}}>
                           <p className="title">Training Sesssion:</p>
                           <p className="subtitle">ICM Plan</p>
                         </div>
                      </div>

                      <div className="datetime-container" style={{marginBottom: '57px'}}>
                        <span>06.09</span>
                        <img src={require('../../../svg/ma-6.svg')} id="svg-6" alt="svg"/>
                        <span>11.09</span>
                      </div>

                      <div className="round-2-child" data-aos="fade-left">
                        <div className="yellow-full-round" style={{paddingLeft: '22px',alignItems:'flex-start'}} >
                          <p className="title">Vòng 2</p>
                          <p className="subtitle"><span>Xây dựng kế hoạch</span></p>
                          <p className="subtitle">Tung sản phẩm mới theo mô hình 6Ps</p>
                        </div>
                         <p className="date">7:00 PM 14.09</p>
                         <div className="white-full-round" style={{paddingLeft: '25px', height: "63px",alignItems:'flex-start'}}>
                           <p className="title">Training Session:</p>
                           <p className="subtitle">Launching Product</p>
                         </div>
                      </div>
                    </div>
                    <p className="text-container">
                        Chọn thêm <span>Top 02 </span> trong <span>Top 09</span> còn lại của <span>mỗi đề</span> vào <span>vòng chung kết.</span> <br/>
                      (*)Cách tính điểmđiểm cho top 09 còn lại của mỗi đề:<br/>
                      - Điểm từ <span>vòng 02</span> chiếm <span>60%</span> điểm tổng kết vào chung cuộc.<br/>
                      - Điểm từ <span>vòng Second Chance</span> chiếm <span>40%</span> tổng điểm vào chung cuộc
                    </p>
                </div>
                

                <img className="circle-img" src={require('../../../images/ma2020/ruleEachRound/3.png')} alt="circle"/>
                <div className="round-container">
                  <div className="datetime-container">
                    <span>14.09</span>
                    <img src={require('../../../svg/ma-6.svg')} id="svg-6" alt="svg"/>
                    <span>18.09</span>
                  </div>
                  <div className="yellow-full-round">
                    <p className="title">Second Chance</p>
                    <p className="subtitle">Cả 20 đội <span>làm</span> Storyboard <span>cho</span> Viral Video</p>
                  </div>
                  <p className="date">7:00 PM 14.09</p>
                  <div className="white-full-round">
                    <p id="title">Training Creative</p>
                  </div>
                </div>
              
                <img className="circle-img" src={require('../../../images/ma2020/ruleEachRound/3.png')} alt="circle"/>
                <div className="round-container">
                  <div className="datetime-container">
                    <span>20.09</span>
                    <img src={require('../../../svg/ma-6.svg')} id="svg-6" alt="svg"/>
                    <span>27.09</span>
                  </div>
                  <div className="yellow-full-round">
                    <p className="title">Vòng 03</p>
                    <p className="subtitle">Top 6 <span>hoàn thành</span> Plan <span>và</span> Executionion Idea <span>theo hướng dẫn của</span>  Mentor</p>
                  </div>
                </div>
              
                <img className="circle-img" src={require('../../../images/ma2020/ruleEachRound/4.png')} alt="circle"/>
                <div className="round-container">
                  <div className="datetime-container" style={{justifyContent: 'center'}}>
                    <span style={{color: '#D82400'}}>27.09</span>
                  </div>
                  <div className="white-full-round" style={{backgroundColor: '#D82400', width: '100%'}}>
                    <p className="title" style={{color: '#ffffff'}} >Gala Night</p>
                  </div>
                </div>
              </div>
           </div>
          <img className="ma-img" id="img-6" src={require('../../../images/ma2020/ruleEachRound/6.png')} alt="circle"/>
          <img className="ma-img" id="img-7" src={require('../../../images/ma2020/ruleEachRound/6.png')} alt="circle"/>
          <img style={{zIndex:'1'}} className="ma-img" id="img-8" src={require('../../../images/ma2020/ruleEachRound/6.png')} alt="circle"/>

        
       </div>
    </section>
  );
}

export default SectionMA;
