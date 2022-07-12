import React from 'react';

function NextEvent() {
    return (
        <section className="kode-event-time d-help-joining-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-5">
                        <div className="find-us-box">
                            <div className="find-us-heder">
                                <div className="content-blue">
                                    <p>Find Us Next</p>
                                    <h2>eVENT</h2>
                                    <p>NEAR TO YOU..</p>
                                </div>
                            </div>
                            <div className="content-black">
                                <p>or Connect Us Directly</p>
                                <a className="contactus-button" href="#">Contact Us</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-7">
                        <div className="next-event-counter">
                            <h2>Next Event Start IN</h2>
                            <ul className="countdown">
                                <li>
                                    <span className="days">276</span>
                                    <p className="days_ref">days</p>
                                </li>
                                <li>
                                    <span className="hours">22</span>
                                    <p className="hours_ref">hours</p>
                                </li>
                                <li>
                                    <span className="minutes">58</span>
                                    <p className="minutes_ref">minutes</p>
                                </li>
                                <li>
                                    <span className="seconds last">23</span>
                                    <p className="seconds_ref">seconds</p>
                                </li>
                            </ul>
                            <h3>SUBSCRIBE FOR UPDATES</h3>
                            <form className="subscribe-form" action="#">
                                <input type="email" placeholder="Email Address" />
                                <input type="submit" value="Subcribe Now" name="submit" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default NextEvent;