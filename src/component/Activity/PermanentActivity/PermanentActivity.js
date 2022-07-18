import React from 'react';
import Header2 from '../../Header/Header2';
import Footer1 from '../../Footer/Footer1';
import { permanentActivityItems } from './PermanentActivityItems';
function PermanentActivity() {
    return (
        <>
            <Header2 subTitle={{ title: "Permanent Activity", root: "Home", current: "Permanent Activity" }} />


            <section class="section-data data" id='service'>
                {
                    permanentActivityItems.map((item, ind) => (


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

export default PermanentActivity;