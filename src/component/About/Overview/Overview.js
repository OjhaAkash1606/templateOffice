import React from 'react';
import Header2 from '../../Header/Header2';
import Footer1 from '../../Footer/Footer1';
import { OverViewItems } from './OverViewItem';
function Overview() {
    return (
        <>
            <Header2 subTitle={{ title: "Over View", root: "Home", current: "Over View" }} />


            <section class="section-data data" id='service'>
                {
                    OverViewItems.map((item, ind) => (
                        <div class="education-div information" key={ind}>
                            <p class="education-para">
                                <b>
                                    <h3>{item.title}</h3>
                                </b>
                                <br />
                                {item.content}
                            </p>
                        </div>

                    ))
                }




            </section>

            <Footer1 />
        </>
    );
}

export default Overview;