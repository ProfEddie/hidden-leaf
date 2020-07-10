import React from 'react';
import '../../css/App.css';
import "../../css/animate.css"

import"../../css/owl.carousel.min.css"
import"../../css/owl.theme.default.min.css"
import"../../css/magnific-popup.css"
import"../../css/flaticon.css"
import"../../css/style.css"
import backgroundImage from '../../images/bg_5.jpg'


function TopSection() {
  return (
    <div className="hero-wrap hero-wrap-2" style={{backgroundImage: `url(${backgroundImage})`, backgroundPosition: "50% -8.39063px", dataStellarBackgroundRatio:"0.5"}}>
    <div className="overlay"></div>
    <div className="container">
      <div className="row no-gutters slider-text align-items-end justify-content-center">
        <div className="col-md-9 ftco-animate mb-5 text-center fadeInUp ftco-animated">
          <p className="breadcrumbs mb-0"><span className="mr-2"><a href="index.html">Home <i className="fa fa-chevron-right"></i></a></span> <span>About us <i className="fa fa-chevron-right"></i></span></p>
          <h1 className="mb-0 bread">About Us</h1>
        </div>
      </div>
    </div>
    </div>

  );
}

export default TopSection;
