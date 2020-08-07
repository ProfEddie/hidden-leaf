import React, {useState} from 'react';
import './style.scss'
import jump from 'jump.js'

export default function Header() {
  const [hide, setHide] = useState(true)

  function jumpTo(target) {
      jump(target, {
        offset: -120
      })
  }


   return (
       <div id="header">
            <div id="overlay" className={hide ? 'hide': 'show'}>
            </div>
           <div id="header-content" className={hide ? 'hide': 'show'}> 
            
             <button className="header-button" onClick={() => jumpTo('#home-section')}>TRANG CHỦ</button>
             <button className="header-button" onClick={() => jumpTo('#about-section')}>VỀ CHÚNG TÔI</button>
             <button className="header-button" id="marketing-button" >MARKETING ARENA 2020</button>
            <div id="drop-down">
              <button className="drop-down-item"  onClick={() => jumpTo('#ma-section')}>Thể lệ vòng thi</button>
              <button className="drop-down-item" onClick={() => jumpTo('#rule-section')}>Cơ cấu cuộc thi</button>
              <button className="drop-down-item" onClick={() => jumpTo('#award-section')}>Cơ cấu giải thưởng</button>
              <button className="drop-down-item" onClick={() => jumpTo('#note-section')}>Lưu ý dành cho thí sinh</button>
             </div>
             <button className="header-button" onClick={() => jumpTo('#register-section')}>ĐĂNG KÍ THAM GIA</button>
             <button className="header-button" onClick={() => jumpTo('#event-section')}>SỰ KIỆN</button>
             <button className="header-button" onClick={() => jumpTo('#sponsor-section')}>ĐỐI TÁC</button>
             <button className="header-button" onClick={() => jumpTo('#footer-section')}>LIÊN HỆ</button>
            
           </div>
           <div id="logo-img-container" onClick={() => setHide(!hide)}>
               <img id="logo-img" src={require('../../images/menu/official-logo-of-creatio.png')} alt="logo"/>
            </div>
       </div>
   )
}