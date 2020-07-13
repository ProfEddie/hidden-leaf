import React from 'react';
import './style.css'

export default function Header() {
   return (
       <div id="header">
           <div id="header-content"> 
             <button className="header-button">Trang chủ</button>
             <button className="header-button">Về chúng tôi</button>
             <button className="header-button">Marketing Arena 2020</button>
             <button className="header-button">Đối tác</button>
             <button className="header-button">Sự kiện</button>
             <button className="header-button">Liên hệ</button>
           </div>
       </div>
   )
}