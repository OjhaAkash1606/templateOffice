import React from 'react';
import Header2 from '../Header/Header2';
import GoogleLocation from './GoogleLocation';
import BrandSlider from '../Home/BrandSlider';


function Contact2() {
    return (
        <>
            <div id="d-help" className="d-relf-wrapper">
                <Header2 subTitle={{ title: "Contact Us", root: "Home", current: "Contact Us" }} />

                <div className="d-help-blog-grid">
                    <GoogleLocation />

                    <div className="d-help-location">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4 col-sm-4">
                                    <div className="d-help-contact">
                                        <h2><a href="#">Office Location</a></h2>
                                        <p><span>4023 Ducak Greek Road</span> San Bruno. CA 94114</p>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-4">
                                    <div className="d-help-contact call-icon">
                                        <h2><a href="#">Call Us</a></h2>
                                        <p><span>4023 Ducak Greek Road</span> San Bruno. CA 94114</p>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-4">
                                    <div className="d-help-contact mail-icon">
                                        <h2><a href="#">Contact Mail</a></h2>
                                        <p><span>4023 Ducak Greek Road</span> San Bruno. CA 94114</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="d-help-comment-field">
                    <div className="container">
                        <div className="d-help-leave-comment width-auto">
                            <h2 className="comment-title title-size">Do you have any Questions</h2>
                            <p>Sed cursus elementum arcu vitae mollis. Curabitur vehicula egestas libero.</p>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="d-help-commet-field">
                                        <input placeholder="Name" name="author" type="text" value="" data-default="Name*"
                                            size="30" required />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-help-commet-field">
                                        <input placeholder="Email" name="author" type="text" value="" data-default="Name*"
                                            size="30" required />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-help-commet-field">
                                        <input placeholder="Phone" name="author" type="text" value="" data-default="Name*"
                                            size="30" required />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-help-commet-field">
                                        <input placeholder="Phone" name="author" type="text" value="" data-default="Name*"
                                            size="30" required />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="d-help-textarea">
                                        <textarea placeholder="Message" name="comment"></textarea>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <p className="d-help-form-submit"><input name="submit" type="submit" className="submit btn-d-help"
                                        value="submit Reply" /></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <BrandSlider />
            </div>
            <footer className="d-help-footer">
                <div className="container">
                    <div className="col-md-4 col-sm-6">
                        <div className="widget widget-text">
                            <h6 className="d-help-widget-title">Abourt Charity</h6>
                            <p>Nunc posuere ornare massa quis convallis. Nunc at pharetra metus, sed feugiat lorem. Sed
                                fringilla, lacus et placerat scelerisque, ipsum urna tincidunt erat, eget vulputate neque...</p>
                            <div className="kode-social-link">
                                <a href="#"><i className="fa fa-facebook"></i></a>
                                <a href="#"><i className="fa fa-twitter"></i></a>
                                <a href="#"><i className="fa fa-linkedin"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="widget widget-twitter">
                            <h6 className="d-help-widget-title">Recent Twitter</h6>
                            <div className="twitter-twite-slider">
                                <div className="twitter-twite">
                                    <p>Nunc <a href="#">@ posuere</a> ornare massa quis convallis. Nunc at pharetra</p>
                                    <span className="date theme-color">4 Week Ago</span>
                                </div>
                                <div className="twitter-twite">
                                    <p>Nunc <a href="#">@ posuere</a> ornare massa quis convallis. Nunc at pharetra</p>
                                    <span className="date theme-color">4 Week Ago</span>
                                </div>
                                <div className="twitter-twite">
                                    <p>Nunc <a href="#">@ posuere</a> ornare massa quis convallis. Nunc at pharetra</p>
                                    <span className="date theme-color">4 Week Ago</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <div className="widget widget-work">
                            <h6 className="d-help-widget-title">Lastest charity Work</h6>
                            <div className="ourwork-thumbs">
                                <a href="#"><img src="assets/extra-images/work1.jpg" alt="" /></a>
                                <a href="#"><img src="assets/extra-images/work2.jpg" alt="" /></a>
                                <a href="#"><img src="assets/extra-images/work3.jpg" alt="" /></a>
                                <a href="#"><img src="assets/extra-images/work4.jpg" alt="" /></a>
                                <a href="#"><img src="assets/extra-images/work5.jpg" alt="" /></a>
                                <a href="#"><img src="assets/extra-images/work6.jpg" alt="" /></a>
                                <a href="#"><img src="assets/extra-images/work7.jpg" alt="" /></a>
                                <a href="#"><img src="assets/extra-images/work8.jpg" alt="" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="copy-right d-help-copy-right">
                <div className="container">
                    <p>Copyright © 2017 Liberality. All Right Reserved</p>
                    <p className="pull-right">Design By with Love <a href="#">kodeforest</a></p>
                </div>
            </div>
        </>

    );
}


export default Contact2;