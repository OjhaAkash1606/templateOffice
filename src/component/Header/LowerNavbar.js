import React from 'react';
import { Link } from 'react-router-dom';
import { Nav_items } from './NavbarItem';
import Donate from './Donate';

function LowerNavbar() {
    return (
        <div className="d-help-navi-wrap">
            <div className="d-help-top-logo">
                <a href="#"><img src="assets/images/chty-logo.png" alt="" /></a>
            </div>
            <div className="d-help-navigation-wrap">
                <nav className="navigation">
                    <ul>
                        {Nav_items.map((item) => (
                            <li>
                                <Link to={item.path}>{item.title}</Link>
                                {
                                    item.subItem && item.subnav.map((list) => (
                                        <>
                                            <ul className={list.cName}>
                                                <li><Link to={list.path}>{list.title}</Link></li>
                                            </ul>
                                        </>
                                    ))
                                }
                            </li>
                        ))}

                    </ul>
                </nav>
                <div id="kode-responsive-navigation" className="dl-menuwrapper">
                    <button className="dl-trigger">Open Menu</button>
                    <ul className="dl-menu">

                        {Nav_items.map((item) => (
                            <li className={item.resClass}>
                                <Link to={item.path}>{item.title}</Link>
                                {
                                    item.subItem && item.subnav.map((list) => (
                                        <>
                                            <ul className={list.resSubMenu}>
                                                <li><Link to={list.path}>{list.title}</Link></li>
                                            </ul>
                                        </>
                                    ))
                                }
                            </li>
                        ))}

                    </ul>
                </div>
                <Donate />
            </div>
        </div>

    );
}

export default LowerNavbar;






{/* <li><Link to="/">Home</Link></li>
                        <li><Link to="/">About Us</Link></li>
                        <li>
                            <Link to="/">Causes</Link>
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
                            <Link to="/">Blog</Link>
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
                            <Link to="/">Mega Menu</Link>
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
                            <Link to="/">Pages</Link>
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
                            <Link to="/">Contact Us</Link>
                            <ul className="chlid">
                                <li><a href="contact-us.html">contact us</a></li>
                                <li><a href="contact-us-02.html">contact us 02</a></li>
                            </ul>
                        </li >
                    * /};

                        







{/* <li ><a href="#">Home</a></li>
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
                        </li> */}