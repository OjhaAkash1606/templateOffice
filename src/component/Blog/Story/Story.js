import React from 'react';
import Footer1 from '../../Footer/Footer1';
import Header2 from '../../Header/Header2';

function Story() {
    return (
        <>
            <Header2 subTitle={{ title: "Story", root: "Home", current: "Story" }} />
            <Footer1 />
        </>
    );
}

export default Story;