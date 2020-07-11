import React from 'react';
import '../../css/App.css';
import "../../css/animate.css"

import"../../css/owl.carousel.min.css"
import"../../css/owl.theme.default.min.css"
import"../../css/magnific-popup.css"
import"../../css/flaticon.css"
import"../../css/style.css"
import backgroundImage from '../../images/konoha3.jpg'

 export default function MiddleSection (){ 
    return (
        <section className="ftco-section ftco-no-pb ftco-no-pt">
			<div className="container">
				<div className="row no-gutters">
					<div className="col-md-6 d-flex align-items-stretch">
						<div className="img img-3 w-100 d-flex justify-content-center align-items-center" style={{backgroundImage: `url(${backgroundImage})`, position: "relative"}}>
							<a href="https://vimeo.com/45830194" className="play-video popup-vimeo d-flex align-items-center justify-content-center">
								<span className="fa fa-play"></span>
	            </a>
						</div>
					</div>
					<div className="col-md-6 wrap-about ftco-animate fadeInUp ftco-animated">
						<div className="bg-light px-3 px-md-5 py-5 ">
		          <div className="heading-section">
		          	<span className="subheading">Welcome to Law Firm</span>
		            <h2 className="mb-3">Why to Put Trust Konoha chunnin exam?</h2>

		            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
		          </div>

		          <div className="row">
		          	<div className="col-lg-6">
		          		<div className="services d-flex w-100">
			    					<div className="icon d-flex align-items-center justify-content-center">
			    						<span className="flaticon-lawyer"></span>
			    					</div>
			    					<div className="text pl-2">
			    						<h2>Cool ninja</h2>
			    						<p>A small river named Duden flows by their place and supplies</p>
			    					</div>
			    				</div>
		          	</div>
		          	<div className="col-lg-6">
		          		<div className="services d-flex w-100">
			    					<div className="icon d-flex align-items-center justify-content-center">
			    						<span className="flaticon-discount"></span>
			    					</div>
			    					<div className="text pl-2">
			    						<h2>Cool ninja</h2>
			    						<p>A small river named Duden flows by their place and supplies</p>
			    					</div>
			    				</div>
		          	</div>
		          	<div className="col-lg-6">
		          		<div className="services d-flex w-100">
			    					<div className="icon d-flex align-items-center justify-content-center">
			    						<span className="flaticon-auction"></span>
			    					</div>
			    					<div className="text pl-2">
			    						<h2>Cool ninja</h2>
			    						<p>A small river named Duden flows by their place and supplies</p>
			    					</div>
			    				</div>
		          	</div>
		          	<div className="col-lg-6">
		          		<div className="services d-flex w-100">
			    					<div className="icon d-flex align-items-center justify-content-center">
			    						<span className="flaticon-handcuffs"></span>
			    					</div>
			    					<div className="text pl-2">
			    						<h2>Cool ninja</h2>
			    						<p>A small river named Duden flows by their place and supplies</p>
			    					</div>
			    				</div>
		          	</div>
		          </div>
	          </div>

					</div>
				</div>
			</div>
		</section>
    )

}

