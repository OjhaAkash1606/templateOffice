import React from 'react';

function Donate() {
    return (
        <div className="d-help-donate-wrap">
            <div data-toggle="modal" data-target="#myModal">
                <a className="btn-default theme-bg-color" href="#">Donate Us</a>
            </div>

            <div className="modal fade" id="myModal" tabIndex={-1} role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="child_donation_row pop-up">
                                <div className="child_donation_element">
                                    <div className="child_donation_des">
                                        <div className="modal-btn">
                                            <button type="button" className="close" data-dismiss="modal"
                                                aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div className="child_donation_caption">
                                            <span>About the Company</span>
                                            <h3 className="section_tittle_2 tittle_3">
                                                Become donation
                                            </h3>
                                            <p>
                                                <span>Child labour deprives our children from
                                                    their childhood</span>
                                                which is very dangerous
                                            </p>
                                        </div>
                                        <div className="child_doantion_amount">
                                            <div className="child_amount_list">
                                                <span>$10</span>
                                                <span>$25</span>
                                                <span>$50</span>
                                                <span>$30</span>
                                                <div className="kf_commet_field">
                                                    <input placeholder="Enter Your Amount (USD)"
                                                        name="email" type="text" value=""
                                                        data-default="Email*" size="30" required />
                                                </div>
                                            </div>
                                            <div className="child_donation_time">
                                                <h6>I Would Like To Donate :</h6>
                                                <div className="child_donation_item">
                                                    <select className="chosen-select">
                                                        <option value="Select Course Name">
                                                            One time Donation
                                                        </option>
                                                        <option value="saab">Saab</option>
                                                        <option value="mercedes">
                                                            Mercedes
                                                        </option>
                                                        <option value="audi">Audi</option>
                                                        <option value="mercedes">
                                                            Mercedes
                                                        </option>
                                                        <option value="audi">Audi</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="child_donation_des donation_2">
                                    <h5>
                                        To Verify Please Complaete the Submission Form
                                        Below
                                    </h5>
                                    <form method="post" className="child_comment donation">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="d-help-commet-field">
                                                    <input placeholder="Your Name" name="author"
                                                        type="text" value="" data-default="Name*"
                                                        size="30" required />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="d-help-commet-field">
                                                    <input placeholder="Your Name" name="author"
                                                        type="text" value="" data-default="Name*"
                                                        size="30" required />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="d-help-commet-field">
                                                    <input placeholder="Your Name" name="author"
                                                        type="text" value="" data-default="Name*"
                                                        size="30" required />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="child_donation_item item_2">
                                                    <select className="chosen-select">
                                                        <option value="Select Course Name">
                                                            One time Donation
                                                        </option>
                                                        <option value="saab">Saab</option>
                                                        <option value="mercedes">
                                                            Mercedes
                                                        </option>
                                                        <option value="audi">Audi</option>
                                                        <option value="mercedes">
                                                            Mercedes
                                                        </option>
                                                        <option value="audi">Audi</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="d-help-commet-field">
                                                    <input placeholder="Your Name" name="author"
                                                        type="text" value="" data-default="Name*"
                                                        size="30" required />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="d-help-commet-field">
                                                    <input placeholder="Your Name" name="author"
                                                        type="text" value="" data-default="Name*"
                                                        size="30" required />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="child_donation_item item_2">
                                                    <select className="chosen-select">
                                                        <option value="Select Course Name">
                                                            One time Donation
                                                        </option>
                                                        <option value="saab">Saab</option>
                                                        <option value="mercedes">
                                                            Mercedes
                                                        </option>
                                                        <option value="audi">Audi</option>
                                                        <option value="mercedes">
                                                            Mercedes
                                                        </option>
                                                        <option value="audi">Audi</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="d-help-commet-field">
                                                    <input placeholder="Your Name" name="author"
                                                        type="text" value="" data-default="Name*"
                                                        size="30" required />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="d-help-commet-field">
                                                    <input placeholder="Your Name" name="author"
                                                        type="text" value="" data-default="Name*"
                                                        size="30" required />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="d-help-commet-field">
                                                    <input placeholder="Your Name" name="author"
                                                        type="text" value="" data-default="Name*"
                                                        size="30" required />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <p className="form-submit">
                                                <button className="btn-d-help theme-bg-color">
                                                    Donate Now
                                                </button>
                                            </p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Donate;