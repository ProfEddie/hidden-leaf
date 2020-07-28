import React from 'react';
import './style.scss'

export default function Header() {
   return (
       <div id="header">
           <div id="header-content"> 

             <button className="header-button">TRANG CHỦ</button>
             <button className="header-button">VỀ CHÚNG TÔI</button>
             <button className="header-button" id="marketing-button">MARKETING ARENA 2020</button>
            <div id="drop-down">
              <button className="drop-down-item">Thể lệ vòng thi</button>
              <button className="drop-down-item">Cơ cấu cuộc thi</button>
              <button className="drop-down-item">Cơ cấu giải thưởng</button>
              <button className="drop-down-item">Lưu ý dành cho thí sinh</button>
             </div>
             <button className="header-button">ĐĂNG KÍ THAM GIA</button>
             <button className="header-button">SỰ KIỆN</button>
             <button className="header-button">ĐỐI TÁC</button>
             <button className="header-button">LIÊN HỆ</button>
            
           </div>
           <div id="logo-img-container">
               <img id="logo-img" src={require('../../images/menu/official-logo-of-creatio.png')} alt="logo"/>
             </div>
       </div>
   )
}