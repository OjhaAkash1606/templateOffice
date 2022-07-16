import React from 'react';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';
// import { Carousel } from 'react-responsive-carousel';


const slideImages = [
    {
        url: "assets/extra-images/help-slider1.jpg",
        caption: 'Slide 1'
    },
    {
        url: "assets/extra-images/help-slider2.jpg",
        caption: 'Slide 2'
    },
    {
        url: "assets/extra-images/help-slider3.jpg",
        caption: 'Slide 3'
    },
    {
        url: "assets/extra-images/help-slider4.jpg",
        caption: 'Slide 4'
    },
];

function BigImage() {
    return (

        <Slide>
            {slideImages.map((slideImage, index) => (
                <div className="d-relf-banner5 custom-slider">
                    <ul className="d-help-slider-for2">
                        <li>
                            <a href="#" data-rel="prettyphoto[]" target="_blank">
                                <div className="slide-container">
                                    <div className="each-slide" key={index}>
                                        <img src={slideImage.url} alt="" />
                                        {/* <div style={{ 'backgroundImage': `url(${slideImage.url})` }}>
                                            <span>{slideImage.caption}</span>
                                        </div> */}
                                    </div>
                                </div>
                                <div className="kode-caption-wrapper position-left">
                                    <div className="kode-caption-inner container">
                                        <div className="cap-left-small">
                                            <div className="top-content-cap-small">Charity Event In</div>
                                            <div className="top-desc-cap-small">NY City 2018</div>
                                        </div>
                                        <div className="kode-caption">
                                            <div className="kode-caption-title">
                                                29 June 2018 - Help the Children in need
                                            </div>
                                            <div className="kode-caption-text">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                Nullam tincidunt pharetra arcu ut viverra. Cras a feugiat
                                                mi. Vivamus rhoncus semper aliquam. Aliquam porta ex ut
                                                magna elementum, a porttitor purus mattis.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            ))}
        </Slide>);
}
{/* <div>
                        <li>
                            <a href="#" data-rel="prettyphoto[]" target="_blank">
                                <img src="assets/extra-images/help-slider1.jpg" alt="" />
                                <div className="kode-caption-wrapper position-left">
                                    <div className="kode-caption-inner container">
                                        <div className="cap-left-small">
                                            <div className="top-content-cap-small">Charity Event In</div>
                                            <div className="top-desc-cap-small">NY City 2018</div>
                                        </div>
                                        <div className="kode-caption">
                                            <div className="kode-caption-title">
                                                29 June 2018 - Help the Children in need
                                            </div>
                                            <div className="kode-caption-text">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                Nullam tincidunt pharetra arcu ut viverra. Cras a feugiat
                                                mi. Vivamus rhoncus semper aliquam. Aliquam porta ex ut
                                                magna elementum, a porttitor purus mattis.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                    </div>
                    <div>

                        <li>
                            <a href="#" data-rel="prettyphoto[]" target="_blank">
                                <img src="assets/extra-images/help-slider2.jpg" alt="" />
                                <div className="kode-caption-wrapper position-center">
                                    <div className="kode-caption-inner container">
                                        <div className="cap-left-small">
                                            <div className="top-content-cap-small">Charity Event In</div>
                                            <div className="top-desc-cap-small">NY City</div>
                                        </div>
                                        <div className="kode-caption">
                                            <div className="kode-caption-title">
                                                29 June 2018 - Help the Children in need
                                            </div>
                                            <div className="kode-caption-text">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                Nullam tincidunt pharetra arcu ut viverra. Cras a feugiat
                                                mi. Vivamus rhoncus semper aliquam. Aliquam porta ex ut
                                                magna elementum, a porttitor purus mattis.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                    </div>
                    <div>

                        <li>
                            <a href="#" data-rel="prettyphoto[]" target="_blank">
                                <img src="assets/extra-images/help-slider3.jpg" alt="" />
                                <div className="kode-caption-wrapper position-right">
                                    <div className="kode-caption-inner container">
                                        <div className="cap-left-small">
                                            <div className="top-content-cap-small">Charity Event In</div>
                                            <div className="top-desc-cap-small">NY City</div>
                                        </div>
                                        <div className="kode-caption">
                                            <div className="kode-caption-title">
                                                29 June 2018 - Help the Children in need
                                            </div>
                                            <div className="kode-caption-text">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                Nullam tincidunt pharetra arcu ut viverra. Cras a feugiat
                                                mi. Vivamus rhoncus semper aliquam. Aliquam porta ex ut
                                                magna elementum, a porttitor purus mattis.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                    </div>
                    <div>

                        <li>
                            <a href="#" data-rel="prettyphoto[]" target="_blank">
                                <img src="assets/extra-images/help-slider4.jpg" alt="" />
                                <div className="kode-caption-wrapper position-center">
                                    <div className="kode-caption-inner container">
                                        <div className="cap-left-small">
                                            <div className="top-content-cap-small">Charity Event In</div>
                                            <div className="top-desc-cap-small">NY City</div>
                                        </div>
                                        <div className="kode-caption">
                                            <div className="kode-caption-title">
                                                29 June 2018 - Help the Children in need
                                            </div>
                                            <div className="kode-caption-text">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                Nullam tincidunt pharetra arcu ut viverra. Cras a feugiat
                                                mi. Vivamus rhoncus semper aliquam. Aliquam porta ex ut
                                                magna elementum, a porttitor purus mattis.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                    </div> */}





export default BigImage;