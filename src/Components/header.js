  import React from 'react';
import'../css/App.css';
import"../css/animate.css"

import"../css/owl.carousel.min.css"
import"../css/owl.theme.default.min.css"
import"../css/magnific-popup.css"
import"../css/flaticon.css"
import"../css/style.css"
import {
  Link
} from "react-router-dom";

function Home() {
  return (
       <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
	    <div className="container">
	      <a className="navbar-brand" href="index.html">Konoha</a>
	      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
	        <span className="oi oi-menu"></span> Menu
	      </button>

	      <div className="collapse navbar-collapse" id="ftco-nav">
	        <ul className="navbar-nav ml-auto">
	          <li className="nav-item active"><Link to="/" className="nav-link">Home</Link></li>
	          <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
	        </ul>
	      </div>
	    </div>
	     </nav>
  );
}

export default Home;

