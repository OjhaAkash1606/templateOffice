import React from 'react';
import Header from '../Header/Header';
import BrandSlider from '../Home/BrandSlider';

function Contact2() {
    return (
        <>
            <div id="d-help" class="d-relf-wrapper">
                <Header />

                <div class="d-relf-banner5 sab-bnr charity-overlay">
                    <div class="container">
                        <div class="d-help-sab-banner-text">
                            <h2>contact us</h2>
                            <ul class="breadcrumb">
                                <li><a href="#">Home</a></li>
                                <li class="active">contact us 02</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="d-help-blog-grid">
                    <div class="d-help-map">
                        <div id="map-canvas" class="map-canvas"></div>
                    </div>
                    <div class="d-help-location">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-4 col-sm-4">
                                    <div class="d-help-contact">
                                        <h2><a href="#">Office Location</a></h2>
                                        <p><span>4023 Ducak Greek Road</span> San Bruno. CA 94114</p>
                                    </div>
                                </div>
                                <div class="col-md-4 col-sm-4">
                                    <div class="d-help-contact call-icon">
                                        <h2><a href="#">Call Us</a></h2>
                                        <p><span>4023 Ducak Greek Road</span> San Bruno. CA 94114</p>
                                    </div>
                                </div>
                                <div class="col-md-4 col-sm-4">
                                    <div class="d-help-contact mail-icon">
                                        <h2><a href="#">Contact Mail</a></h2>
                                        <p><span>4023 Ducak Greek Road</span> San Bruno. CA 94114</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="d-help-comment-field">
                    <div class="container">
                        <div class="d-help-leave-comment width-auto">
                            <h2 class="comment-title title-size">Do you have any Questions</h2>
                            <p>Sed cursus elementum arcu vitae mollis. Curabitur vehicula egestas libero.</p>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="d-help-commet-field">
                                        <input placeholder="Name" name="author" type="text" value="" data-default="Name*"
                                            size="30" required />
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="d-help-commet-field">
                                        <input placeholder="Email" name="author" type="text" value="" data-default="Name*"
                                            size="30" required />
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="d-help-commet-field">
                                        <input placeholder="Phone" name="author" type="text" value="" data-default="Name*"
                                            size="30" required />
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="d-help-commet-field">
                                        <input placeholder="Phone" name="author" type="text" value="" data-default="Name*"
                                            size="30" required />
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="d-help-textarea">
                                        <textarea placeholder="Message" name="comment"></textarea>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <p class="d-help-form-submit"><input name="submit" type="submit" class="submit btn-d-help"
                                        value="submit Reply" /></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <BrandSlider />
            </div>
            <footer class="d-help-footer">
                <div class="container">
                    <div class="col-md-4 col-sm-6">
                        <div class="widget widget-text">
                            <h6 class="d-help-widget-title">Abourt Charity</h6>
                            <p>Nunc posuere ornare massa quis convallis. Nunc at pharetra metus, sed feugiat lorem. Sed
                                fringilla, lacus et placerat scelerisque, ipsum urna tincidunt erat, eget vulputate neque...</p>
                            <div class="kode-social-link">
                                <a href="#"><i class="fa fa-facebook"></i></a>
                                <a href="#"><i class="fa fa-twitter"></i></a>
                                <a href="#"><i class="fa fa-linkedin"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-6">
                        <div class="widget widget-twitter">
                            <h6 class="d-help-widget-title">Recent Twitter</h6>
                            <div class="twitter-twite-slider">
                                <div class="twitter-twite">
                                    <p>Nunc <a href="#">@ posuere</a> ornare massa quis convallis. Nunc at pharetra</p>
                                    <span class="date theme-color">4 Week Ago</span>
                                </div>
                                <div class="twitter-twite">
                                    <p>Nunc <a href="#">@ posuere</a> ornare massa quis convallis. Nunc at pharetra</p>
                                    <span class="date theme-color">4 Week Ago</span>
                                </div>
                                <div class="twitter-twite">
                                    <p>Nunc <a href="#">@ posuere</a> ornare massa quis convallis. Nunc at pharetra</p>
                                    <span class="date theme-color">4 Week Ago</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-12">
                        <div class="widget widget-work">
                            <h6 class="d-help-widget-title">Lastest charity Work</h6>
                            <div class="ourwork-thumbs">
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
            <div class="copy-right d-help-copy-right">
                <div class="container">
                    <p>Copyright © 2017 Liberality. All Right Reserved</p>
                    <p class="pull-right">Design By with Love <a href="#">kodeforest</a></p>
                </div>
            </div>
        </>

    );
}

export default Contact2;