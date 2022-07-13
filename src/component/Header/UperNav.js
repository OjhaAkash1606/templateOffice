import React from 'react';

function UperNavbar() {
    return (
        <div className="d-help-top-text">
            <p><i className="fa fa-clock-o"></i> Mon - Fri : 09:00 - 17:00</p>
            <div className="d-help-top-contact">
                <ul className="d-help-call-us">
                    <li>
                        <a href="#"><i className="fa fa-phone"></i>+91-7016586349</a>
                    </li>
                    <li>
                        <a href="login.html"><i className="fa fa-lock"></i>Login or Register</a>
                    </li>
                </ul>
                <ul className="d-help-social-media">
                    <li>
                        <a href="#"><i className="fa fa-facebook"></i></a>
                    </li>
                    <li>
                        <a href="#"><i className="fa fa-twitter"></i></a>
                    </li>
                    <li>
                        <a href="#"><i className="fa fa-google-plus"></i></a>
                    </li>
                    <li>
                        <a href="#"><i className="fa fa-linkedin"></i></a>
                    </li>
                </ul>
                <span className="d-help-menu-btn" /* onClick={openNav} */  ><i className="fa fa-align-justify"></i></span>
                <div id="mySidenav" className="sidenav overlay">
                    <a href="#!" className="closebtn" /* onClick={closeNav} */ >&times;</a >
                    <div className="kode_sidebar_wrap">
                        <div className="kode_sidebar_logo">
                            <a href="#"><img src="assets/images/chty-logo-2.png" alt="" /></a>
                        </div>
                        <div className="kode_sidebar_content">
                            <h5 className="title">About Us</h5>
                            <p>
                                Perspiciatis unde omnis iste natus sit voluptatem
                                cusantium doloremque laudantium totam rem aperiam, eaque
                                ipsa quae. ab illo inventore veritatis et.
                            </p>
                            <ul className="kode_sidebar_service">
                                <li>
                                    <a href="#"><i className="fa fa-facebook"></i>Los Angeles, Street
                                        Avenue, la 2540</a>
                                </li>
                                <li>
                                    <a href="#"><i className="fa fa-phone"></i>Phone: 0810 123-45678</a>
                                </li>
                                <li>
                                    <a href="#"><i className="fa fa-twitter"></i>Email:
                                        gameplay@noreply.com</a>
                                </li>
                            </ul>
                        </div>
                        <div className="kode_side_post">
                            <h5 className="title">Recent Post</h5>
                            <ul>
                                <li>
                                    <div className="kode_recent_medium">
                                        <figure id="plate-inverse14" className="hover-overlay">
                                            <img src="assets/extra-images/side-menu-fig.jpg" alt="" />
                                        </figure>
                                        <div className="kode_recent_content">
                                            <p>
                                                Perspiciatis unde omnis iste natus sit
                                                voluptatem
                                            </p>
                                            <ul className="kode_side_comment">
                                                <li><a href="#">April 30, 2017</a></li>
                                                <li>
                                                    <a href="#"><i className="fa fa-comments-o"></i>2
                                                        Comments</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="kode_recent_medium">
                                        <figure id="plate-inverse15" className="hover-overlay">
                                            <img src="assets/extra-images/side-menu-fig1.jpg" alt="" />
                                        </figure>
                                        <div className="kode_recent_content">
                                            <p>
                                                Perspiciatis unde omnis iste natus sit
                                                voluptatem
                                            </p>
                                            <ul className="kode_side_comment">
                                                <li><a href="#">April 30, 2017</a></li>
                                                <li>
                                                    <a href="#"><i className="fa fa-comments-o"></i>2
                                                        Comments</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="kode_recent_medium">
                                        <figure id="plate-inverse61" className="hover-overlay">
                                            <img src="assets/extra-images/side-menu-fig2.jpg" alt="" />
                                        </figure>
                                        <div className="kode_recent_content">
                                            <p>
                                                Perspiciatis unde omnis iste natus sit
                                                voluptatem
                                            </p>
                                            <ul className="kode_side_comment">
                                                <li><a href="#">April 30, 2017</a></li>
                                                <li>
                                                    <a href="#"><i className="fa fa-comments-o"></i>2
                                                        Comments</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="kode_side_copyright">
                            <p>Copyright © 2016 <a href="#">Kodeforest.</a></p>
                            <ul className="kode_side_icon">
                                <li>
                                    <a href="#"><i className="fa fa-facebook"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className="fa fa-search"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className="fa fa-twitter"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default UperNavbar;