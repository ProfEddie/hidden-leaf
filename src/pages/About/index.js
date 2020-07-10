import React from 'react';
import '../../css/App.css';
import "../../css/animate.css"

import"../../css/owl.carousel.min.css"
import"../../css/owl.theme.default.min.css"
import"../../css/magnific-popup.css"
import"../../css/flaticon.css"
import"../../css/style.css"
import TopSection from './TopSection'
import MiddleSection from './MiddleSection'
import MiddleSection1 from './MiddleSection1'
import MiddleSection2 from './MiddleSection2'
function About() {
  return (
    <div className="About">
      <TopSection/>
      <MiddleSection/>
      <MiddleSection1/>
      <MiddleSection2/>
     </div>
  );
}

export default About;
