import React from 'react';

function Media() {
    return (
        <section className="d-help-media">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-sm-4">
                        <div className="d-help-media-thumb">
                            <h6 className="media-thumb-title"><a href="#">Media</a></h6>
                            <span>
                                <i className="fa fa-music fa-4x"></i>
                            </span>
                            <p>
                                It has roots in a piece of classNameical Latin literature from
                                45 BC, making it over 2000 years old.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4">
                        <div className="d-help-media-thumb">
                            <h6 className="media-thumb-title">
                                <a href="#">Become Volunteer</a>
                            </h6>
                            <span>
                                <i className="fa fa-bullhorn fa-4x"></i>
                            </span>
                            <p>
                                It has roots in a piece of classNameical Latin literature from
                                45 BC, making it over 2000 years old.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4">
                        <div className="d-help-media-thumb">
                            <h6 className="media-thumb-title">
                                <a href="#">Send Donation</a>
                            </h6>
                            <span>
                                <i className="fa fa-dollar fa-4x"></i>
                            </span>
                            <p>
                                It has roots in a piece of classNameical Latin literature from
                                45 BC, making it over 2000 years old.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Media;