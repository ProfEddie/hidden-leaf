import React from 'react';
import '../../css/App.css';
import "../../css/animate.css"

import"../../css/owl.carousel.min.css"
import"../../css/owl.theme.default.min.css"
import"../../css/magnific-popup.css"
import"../../css/flaticon.css"
import"../../css/style.css"


export default function MiddleSection1(){ 
    return(
        <section className="ftco-counter ftco-section ftco-no-pt mt-4 ftco-no-pb img" id="section-counter">
    	<div className="container">
    		<div className="row mb-4">
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch counter-wrap ftco-animate fadeInUp ftco-animated">
            <div className="block-18 py-4 w-100">
            	<span className="icon flaticon-checklist"></span>
              <div className="text align-items-center">
                <strong className="number" data-number="3000">3,000</strong>
                <span>Trusted Clients</span>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch counter-wrap ftco-animate fadeInUp ftco-animated">
            <div className="block-18 py-4 w-100">
            	<span className="icon flaticon-checklist"></span>
              <div className="text align-items-center">
                <strong className="number" data-number="1000">1,000</strong>
                <span>Honor's &amp; Awards</span>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch counter-wrap ftco-animate fadeInUp ftco-animated">
            <div className="block-18 py-4 w-100">
            	<span className="icon flaticon-checklist"></span>
              <div className="text align-items-center">
                <strong className="number" data-number="2000">2,000</strong>
                <span>Expert Lawyers</span>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch counter-wrap ftco-animate fadeInUp ftco-animated">
            <div className="block-18 py-4 w-100">
            	<span className="icon flaticon-checklist"></span>
              <div className="text align-items-center">
                <strong className="number" data-number="10540">10,540</strong>
                <span>Successful Cases</span>
              </div>
            </div>
          </div>
        </div>
    	</div>
    </section>
    )
 }