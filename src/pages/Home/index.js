import React from 'react';
import '../../css/App.css';
import "../../css/animate.css"

import"../../css/owl.carousel.min.css"
import"../../css/owl.theme.default.min.css"
import"../../css/magnific-popup.css"
import"../../css/flaticon.css"
import"../../css/style.css"
import SectionTop from './SectionTop'
import IconSection from './IconSection'
function Home() {
  return (
    <div className="Home">
     <SectionTop/>
     <IconSection/>
    </div>
  );
}

export default Home;
