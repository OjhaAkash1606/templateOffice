import React from 'react';
import Footer1 from '../Footer/Footer1';
import Header2 from '../Header/Header2';

function Career() {
    return (
        <>
            <Header2 subTitle={{ title: "Career", root: "Home", current: "Career" }} />
            <Footer1 />
        </>
    );
}

export default Career;