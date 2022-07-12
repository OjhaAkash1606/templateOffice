import React from 'react';

function Footer1() {
    return (
        <footer className="d-help-footer footer2 overlay">

            <div className="container">


                <div className="widget-services-call">
                    <ul>
                        <li>
                            <div className="widget-call-up">
                                <a href="#"><i className="fa fa-phone"></i></a>
                                <div className="widget-call-contact">
                                    <h6>phone</h6>
                                    <p>(+1-888-77-8989 00)</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="widget-call-up">
                                <a href="#"><i className="fa fa-map-marker"></i></a>
                                <div className="widget-call-contact">
                                    <h6>address</h6>
                                    <p>12od, strikerate st, us1010a</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="widget-call-up">
                                <a href="#"><i className="fa fa-location-arrow"></i></a>
                                <div className="widget-call-contact">
                                    <h6>email</h6>
                                    <p><a href="#">info@domiannname</a></p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="row">
                    <div className="col-md-4 col-sm-6">
                        <div className="widget widget-email">
                            <h2 className="widget-title">Liberality</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                consectetur adipisicing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore consectetur adipisicing elit, consectetur
                                adipisicing elit, sed do eiusmod tempor
                            </p>
                            <div className="widget email-location">
                                <div className="d-help-commet-field email">
                                    <input placeholder="Enter Your Email Address" name="author" type="text" value=""
                                        data-default="Name*" size="30" required />
                                    <a className="btn-d-help" href="#"><i className="fa fa-envelope"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="d-help-side-widget">
                            <h2 className="widget-title">recent post</h2>
                            <div className="d-help-side-categoires">
                                <ul>
                                    <li>
                                        <div className="d-help-side-latest widget">
                                            <figure className="hover-overlay">
                                                <img src="assets/extra-images/widget-recent.jpg" alt="" />
                                            </figure>
                                            <div className="d-help-latest-text">
                                                <span>26 july 2016</span>
                                                <h6>
                                                    <a href="#">days are all happiness is key and free</a>
                                                </h6>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="d-help-side-latest widget">
                                            <figure className="hover-overlay">
                                                <img src="assets/extra-images/widget-recent1.jpg" alt="" />
                                            </figure>
                                            <div className="d-help-latest-text">
                                                <span>26 july 2016</span>
                                                <h6>
                                                    <a href="#">days are all happiness is key and free</a>
                                                </h6>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="d-help-side-latest widget">
                                            <figure className="hover-overlay">
                                                <img src="assets/extra-images/widget-recent2.jpg" alt="" />
                                            </figure>
                                            <div className="d-help-latest-text">
                                                <span>26 july 2016</span>
                                                <h6>
                                                    <a href="#">days are all happiness is key and free</a>
                                                </h6>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="widget email-location margin">
                            <h2 className="widget-title">send us a message</h2>
                            <div className="d-help-commet-field email">
                                <input placeholder="your name" name="author" type="text" value="" data-default="Name*"
                                    size="30" required />
                            </div>
                            <div className="d-help-commet-field email">
                                <input placeholder="Your Email" name="author" type="text" value="" data-default="Name*"
                                    size="30" required />
                            </div>
                            <div className="d-help-textarea email">
                                <textarea>your message</textarea>
                            </div>
                            <a href="#" className="btn-d-help theme-bg-color">send</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer1;