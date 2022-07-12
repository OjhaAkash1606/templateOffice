import React from 'react';
import Donate from './Donate';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="d-hlp-header6">
            <div className="d-help-top-wrap">
                <div className="container">
                    <div className="d-help-top-text">
                        <p><i className="fa fa-clock-o"></i> Mon - Fri : 09:00 - 17:00</p>
                        <div className="d-help-top-contact">
                            <ul className="d-help-call-us">
                                <li>
                                    <a href="#"><i className="fa fa-phone"></i>8 800 256 35 87</a>
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
                            {/* <span className="d-help-menu-btn" onClick={openNav}  ><i className="fa fa-align-justify"></i></span>
                            <div id="mySidenav" className="sidenav overlay">
                                <a href="#!" className="closebtn" onClick={closeNav} >&times;</a >
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
                            </div> */}
                        </div>
                    </div>
                    <div className="d-help-navi-wrap">
                        <div className="d-help-top-logo">
                            <a href="#"><img src="assets/images/chty-logo.png" alt="" /></a>
                        </div>
                        <div className="d-help-navigation-wrap">
                            <nav className="navigation">
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><a href="about-us.html">About Us</a></li>
                                    <li>
                                        <a href="#">Causes</a>
                                        <ul className="chlid">
                                            <li><a href="causes.html">causes</a></li>
                                            <li>
                                                <a href="causes-listing.html">causes listing</a>
                                            </li>
                                            <li>
                                                <a href="causes-detail-sidebar.html">causes sidebar</a>
                                            </li>
                                            <li>
                                                <a href="causes-detail.html">causes detail page</a>
                                            </li>
                                        </ul>
                                    </li>

                                    <li>
                                        <a href="#">Blog</a>
                                        <ul className="chlid">
                                            <li><a href="blog.html">blog</a></li>
                                            <li><a href="blog-listing.html">blog listing</a></li>
                                            <li>
                                                <a href="blog-listing2.html">blog listing 02</a>
                                            </li>
                                            <li><a href="blog-detail.html">blog detail page</a></li>
                                        </ul>
                                    </li>

                                    <li className="mega">
                                        <a href="#">Mega Menu</a>
                                        <div className="d-help-megamenu">
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <div className="d-help-mega-feature">
                                                        <h4 className="mega-tittle">feature</h4>
                                                        <ul className="d-help-mega-list">
                                                            <li><a href="shop.html">shop</a></li>
                                                            <li><a href="faq.html">faq page</a></li>
                                                            <li><a href="404.html">404 page</a></li>
                                                            <li><a href="team.html">team page</a></li>
                                                            <li>
                                                                <a href="shop-detail.html">shop detail</a>
                                                            </li>
                                                            <li>
                                                                <a href="coming-soon.html">coming-soon</a>
                                                            </li>
                                                            <li>
                                                                <a href="volunteer.html">volunteer page</a>
                                                            </li>
                                                            <li>
                                                                <a href="blog-listing2.html">blog listing 02</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="d-help-mega-feature">
                                                        <h4 className="mega-tittle">latest news</h4>
                                                        <div className="d-help-maga-news">
                                                            <figure id="plate-inverse4" className="hover-overlay">
                                                                <img src="assets/extra-images/latest.jpg" alt="" />
                                                            </figure>
                                                            <div className="d-help-mega-news-text">
                                                                <h6>help in libya</h6>
                                                                <span>1 hour ago</span>
                                                            </div>
                                                        </div>
                                                        <div className="d-help-maga-news">
                                                            <figure id="plate-inverse16" className="hover-overlay">
                                                                <img src="assets/extra-images/latest1.jpg" alt="" />
                                                            </figure>
                                                            <div className="d-help-mega-news-text">
                                                                <h6>help in libya</h6>
                                                                <span>1 hour ago</span>
                                                            </div>
                                                        </div>
                                                        <div className="d-help-maga-news">
                                                            <figure id="plate-inverse7" className="hover-overlay">
                                                                <img src="assets/extra-images/latest2.jpg" alt="" />
                                                            </figure>
                                                            <div className="d-help-mega-news-text">
                                                                <h6>help in libya</h6>
                                                                <span>1 hour ago</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="d-help-mega-feature">
                                                        <h4 className="mega-tittle">features news</h4>
                                                        <div className="d-help-mege-news-fig">
                                                            <figure id="plate-inverse" className="hover-overlay">
                                                                <img src="assets/extra-images/mega-news.jpg" alt="" />
                                                                <a data-rel="prettyPhoto"
                                                                    href="https://www.youtube.com/watch?v=lVHpH1y_G4Y"><i
                                                                        className="fa fa-play-circle"></i></a>
                                                            </figure>
                                                            <p>
                                                                It has roots in a piece of classNameical Latin
                                                                piece of piece classNameical Latin literature
                                                                from..
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <a href="#">Pages</a>
                                        <ul className="chlid">
                                            <li>
                                                <a href="#">Event</a>
                                                <ul className="chlid">
                                                    <li><a href="event-full.html">event full</a></li>
                                                    <li>
                                                        <a href="event-2column.html">event 2 column</a>
                                                    </li>
                                                    <li>
                                                        <a href="event-3column.html">event 3 column</a>
                                                    </li>
                                                    <li>
                                                        <a href="event-listing.html">event listing</a>
                                                    </li>
                                                    <li>
                                                        <a href="event-listing02.html">event listing 02</a>
                                                    </li>
                                                    <li>
                                                        <a href="event-detail.html">event detail page</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#">Gallery</a>
                                                <ul className="chlid">
                                                    <li>
                                                        <a href="gallery-2column.html">Gallery 2 Column</a>
                                                    </li>
                                                    <li>
                                                        <a href="gallery-3column.html">Gallery 3 Column</a>
                                                    </li>
                                                    <li>
                                                        <a href="gallery-multi-grid.html">gallery Multiple</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li><a href="shop.html">shop</a></li>
                                            <li><a href="faq.html">faq page</a></li>
                                            <li><a href="404.html">404 page</a></li>
                                            <li><a href="team.html">team page</a></li>
                                            <li><a href="login.html">login page</a></li>
                                            <li><a href="shop-detail.html">shop detail</a></li>
                                            <li><a href="coming-soon.html">coming soon</a></li>
                                            <li><a href="volunteer.html">volunteer page</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link to="/contact"> CONTACT US</Link>
                                        <ul className="chlid">
                                            <li><a href="contact-us.html">contact us</a></li>
                                            <li><a href="contact-us-02.html">contact us 02</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </nav>
                            <div id="kode-responsive-navigation" className="dl-menuwrapper">
                                <button className="dl-trigger">Open Menu</button>
                                <ul className="dl-menu">
                                    <li ><a href="#">Home</a></li>
                                    <li className="menu-item">
                                        <a href="about-us.html">about us</a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="#">causes</a>
                                        <ul className="dl-submenu">
                                            <li><a href="causes.html">causes</a></li>
                                            <li>
                                                <a href="causes-listing.html">causes listing</a>
                                            </li>
                                            <li>
                                                <a href="causes-detail-sidebar.html">causes sidebar</a>
                                            </li>
                                            <li>
                                                <a href="causes-detail.html">causes detail page</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="menu-item">
                                        <a href="#">event</a>
                                        <ul className="dl-submenu">
                                            <li><a href="event-full.html">event full</a></li>
                                            <li><a href="event-2column.html">event 2 column</a></li>
                                            <li><a href="event-3column.html">event 3 column</a></li>
                                            <li><a href="event-listing.html">event listing</a></li>
                                            <li>
                                                <a href="event-listing02.html">event listing 02</a>
                                            </li>
                                            <li>
                                                <a href="event-detail.html">event detail page</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="menu-item">
                                        <a href="#">blog</a>
                                        <ul className="dl-submenu">
                                            <li><a href="blog.html">blog</a></li>
                                            <li><a href="blog-listing.html">blog listing</a></li>
                                            <li>
                                                <a href="blog-listing2.html">blog listing 02</a>
                                            </li>
                                            <li><a href="blog-detail.html">blog detail page</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">gallery</a>
                                        <ul className="dl-submenu">
                                            <li>
                                                <a href="gallery-2column.html">Gallery 2 Column</a>
                                            </li>
                                            <li>
                                                <a href="gallery-3column.html">Gallery 3 Column</a>
                                            </li>
                                            <li>
                                                <a href="gallery-multi-grid.html">gallery Multiple</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">SHOP</a>
                                        <ul className="dl-submenu">
                                            <li><a href="shop.html">shop</a></li>
                                            <li><a href="shop-detail.html">shop detail</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">pages</a>
                                        <ul className="dl-submenu">
                                            <li><a href="faq.html">faq page</a></li>
                                            <li><a href="404.html">404 page</a></li>
                                            <li><a href="team.html">team page</a></li>
                                            <li><a href="login.html">login page</a></li>
                                            <li><a href="coming-soon.html">coming-soon</a></li>
                                            <li><a href="volunteer.html">volunteer page</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link to="/contact">CONTACT US</Link>
                                        <ul className="dl-submenu">
                                            <li><a href="contact-us.html">contact us</a></li>
                                            <li><a href="contact-us-02.html">contact us 02</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <Donate />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;