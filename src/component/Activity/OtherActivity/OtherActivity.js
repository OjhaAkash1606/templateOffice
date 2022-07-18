import React from 'react';
import Header2 from '../../Header/Header2';
import Footer1 from '../../Footer/Footer1';

function OtherActivity() {
    return (
        <>
            <Header2 subTitle={{ title: "Other Activity", root: "Home", current: "Other Activity" }} />
            <Footer1 />
        </>
    );
}

export default OtherActivity;