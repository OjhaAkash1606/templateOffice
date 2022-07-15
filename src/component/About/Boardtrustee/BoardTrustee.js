import React from 'react';
import Header2 from '../../Header/Header2';
import { introItems } from './introItem';
import Footer1 from '../../Footer/Footer1';

/* 
<link rel="stylesheet" href="../css/home.css">
    <link rel="stylesheet" href="../css/about_over_view.css">
        <link rel="stylesheet" href="../css/about_leadership.css"> */

function BoardTrustee() {
    return (
        <>
            <Header2 subTitle={{ title: "Board Trustees", root: "Home", current: "Board Trustees" }} />

            <section class="section-data data" id='service'>


                {introItems.map((item) => (
                    <div class="education-div information ">
                        <p class="para education-para">
                            <b>
                                {item.name}
                            </b>
                            <br />
                            {item.intro}
                        </p>
                        <img src={item.imgSrc} alt={item.imgAlt} class="education-img pic" />
                    </div>
                ))}
            </section>
            <Footer1 />
        </>
    );
}
export default BoardTrustee;