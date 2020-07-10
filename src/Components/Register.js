import React from 'react';
import'../css/App.css';
import"../css/animate.css"

import"../css/owl.carousel.min.css"
import"../css/owl.theme.default.min.css"
import"../css/magnific-popup.css"
import"../css/flaticon.css"
import"../css/style.css"
import backgroundImage from '../images/bg_2.jpg'
export default function Register() { 
    return ( 
        <section className="ftco-appointment ftco-section img" style={{backgroundImage: `url(${backgroundImage})`}}>
        <div className="overlay"></div>
    <div className="container">
        <div className="row">
            <div className="col-md-6 pr-md-5">
                <div className="heading-section heading-section-white">
            <h2 className="mb-3">We Have Great Results</h2>
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
            <div className="row mt-md-4">
                <div className="col-lg-6">
                    <div className="services d-flex w-100">
                                <div className="icon icon-2 d-flex align-items-center justify-content-center">
                                    <span className="flaticon-medal"></span>
                                </div>
                                <div className="text pl-3">
                                    <h2>Award Winning</h2>
                                    <p>A small river named Duden flows by their place and supplies</p>
                                </div>
                            </div>
                </div>
                <div className="col-lg-6">
                    <div className="services d-flex w-100">
                                <div className="icon icon-2 d-flex align-items-center justify-content-center">
                                    <span className="flaticon-auction"></span>
                                </div>
                                <div className="text pl-3">
                                    <h2>60 Years of Experience</h2>
                                    <p>A small river named Duden flows by their place and supplies</p>
                                </div>
                            </div>
                </div>
                <div className="col-lg-12">
                    <div className="services d-flex w-100">
                                <div className="icon icon-2 d-flex align-items-center justify-content-center">
                                    <span className="flaticon-lawyer"></span>
                                </div>
                                <div className="text pl-3">
                                    <h2>Best Attorneys team</h2>
                                    <p>A small river named Duden flows by their place and supplies</p>
                                </div>
                            </div>
                </div>
            </div>
                </div>
            </div>
            <div className="col-md-6 half ftco-animate fadeInUp ftco-animated">
                <h2 className="mb-4">Free Case Consultation</h2>
                <form action="#" className="appointment">
                    <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                      <input type="text" className="form-control" placeholder="Your Name"/>
                    </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                      <input type="text" className="form-control" placeholder="Email"/>
                    </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                <div className="form-field">
                              <div className="select-wrap">
                      <div className="icon"><span className="fa fa-chevron-down"></span></div>
                      <select name="" id="" className="form-control">
                          <option value="">Practice Areas</option>
                        <option value="">Business Law</option>
                        <option value="">Criminal Law</option>
                        <option value="">Family Law</option>
                        <option value="">Judicial Law</option>
                        <option value="">Personal Injury</option>
                        <option value="">Real Estate Law</option>
                      </select>
                    </div>
                      </div>
                            </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                      <textarea name="" id="" cols="30" rows="7" className="form-control" placeholder="Message"></textarea>
                    </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                      <input type="submit" value="Send message" className="btn btn-primary py-3 px-4"/>
                    </div>
                            </div>
                    </div>
          </form>
            </div>
        </div>
    </div>
      </section>
    )
 }