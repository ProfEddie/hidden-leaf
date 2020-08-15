import React from 'react';
import Countdown from 'react-countdown';
import './style.scss'

const Completionist = () => (
  <div id="clock-container">
      <p id="title">Hết thời hạn đăng ký! </p>
      <div id="time-container"> 
        <div className="time">
          <span className="time-unit">Thời gian đã hết, bạn không thể đăng ký cho mục này được nữa ^^!</span>
        </div>
      </div>
    </div>
)
 
const renderer = ({days ,hours, minutes, seconds, completed }) => {
  if (completed) {
    return <Completionist />;
  } else {
    return (
    <div id="clock-container">
      <p id="title">Hạn đăng kí còn:</p>
      <div id="time-container"> 
        <div className="time">
          <span className="time-val">{days < 10 ? `0${days}` : days}</span>
          <span className="time-unit">NGÀY</span>
        </div>
        <svg width="12" height="44" viewBox="0 0 12 44" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M11.9586 37.6715C11.9586 34.4744 9.472 31.899 6.00847 31.899C2.54495 31.899 0.0583137 34.5632 0.0583137 37.7603C0.0583137 40.8686 2.72256 43.5328 6.00847 43.5328C9.472 43.5328 11.9586 40.7798 11.9586 37.6715ZM11.9586 6.14455C11.9586 3.03626 9.472 0.372009 6.00847 0.372009C2.54495 0.372009 0.0583137 3.12507 0.0583137 6.23336C0.0583137 9.43046 2.72256 12.0059 6.00847 12.0059C9.472 12.0059 11.9586 9.34165 11.9586 6.14455Z" fill="#9B9B9B"/>
        </svg>
        <div className="time">
          <span className="time-val">{hours < 10 ? `0${hours}` : hours}</span>
          <span className="time-unit">GIỜ</span>
        </div>
        <svg width="12" height="44" viewBox="0 0 12 44" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M11.9586 37.6715C11.9586 34.4744 9.472 31.899 6.00847 31.899C2.54495 31.899 0.0583137 34.5632 0.0583137 37.7603C0.0583137 40.8686 2.72256 43.5328 6.00847 43.5328C9.472 43.5328 11.9586 40.7798 11.9586 37.6715ZM11.9586 6.14455C11.9586 3.03626 9.472 0.372009 6.00847 0.372009C2.54495 0.372009 0.0583137 3.12507 0.0583137 6.23336C0.0583137 9.43046 2.72256 12.0059 6.00847 12.0059C9.472 12.0059 11.9586 9.34165 11.9586 6.14455Z" fill="#9B9B9B"/>
        </svg>
        <div className="time">
          <span className="time-val">{minutes < 10 ? `0${minutes}` : minutes}</span>
          <span className="time-unit">PHÚT</span>
        </div>
        <svg width="12" height="44" viewBox="0 0 12 44" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M11.9586 37.6715C11.9586 34.4744 9.472 31.899 6.00847 31.899C2.54495 31.899 0.0583137 34.5632 0.0583137 37.7603C0.0583137 40.8686 2.72256 43.5328 6.00847 43.5328C9.472 43.5328 11.9586 40.7798 11.9586 37.6715ZM11.9586 6.14455C11.9586 3.03626 9.472 0.372009 6.00847 0.372009C2.54495 0.372009 0.0583137 3.12507 0.0583137 6.23336C0.0583137 9.43046 2.72256 12.0059 6.00847 12.0059C9.472 12.0059 11.9586 9.34165 11.9586 6.14455Z" fill="#9B9B9B"/>
        </svg>

        <div className="time">
          <span className="time-val">{seconds < 10 ? `0${seconds}` : seconds}</span>
          <span className="time-unit">GIÂY</span>
         </div>

      </div>
    
    </div>)
  }
};

function Clock({dueDate}) {
  return (
    <Countdown
      date={Date.now() + dueDate}
      renderer={renderer}
    />
  );
}

export default Clock;
