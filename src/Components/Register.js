import React from 'react';
import'../css/App.css';
import"../css/animate.css"

import"../css/owl.carousel.min.css"
import"../css/owl.theme.default.min.css"
import"../css/magnific-popup.css"
import"../css/flaticon.css"
import"../css/style.css"
import backgroundImage from '../images/konoha7.jpg'
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
                                    <h2>Best Ninja</h2>
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
                                    <h2>Best Ninja</h2>
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
                                    <h2>Best Ninja</h2>
                                    <p>A small river named Duden flows by their place and supplies</p>
                                </div>
                            </div>
                </div>
            </div>
                </div>
            </div>
            <div className="col-md-6 half ftco-animate fadeInUp ftco-animated">
                <h2 className="mb-4">Free Register</h2>
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
                          <option value="">You are from</option>
                        <option value="">Konohagakure no Sato</option>
                        <option value="">Sunagakure no Sato</option>
                        <option value="">Kirigakure no Sato</option>
                        <option value="">Iwagakure no Sato</option>
                        <option value="">Kumogakure no Sato</option>
                        <option value="">Uzushiogakure no Sato</option>
                        <option value="">Otogakure no Sato</option>
                        <option value="">Kusagakure no Sato</option>
                        <option value="">Takigakure no Sato</option>
                        <option value="">Hoshigakure no Sato</option>

                      </select>
                    </div>
                      </div>
                            </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                      <textarea name="" id="" cols="30" rows="7" className="form-control" placeholder="Overview"></textarea>
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