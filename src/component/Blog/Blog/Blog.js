import React from 'react';
import Footer1 from '../../Footer/Footer1';
import Header2 from '../../Header/Header2';

function BlogNav() {
    return (
        <>
            <Header2 subTitle={{ title: "Blog", root: "Home", current: "Blog" }} />
            <Footer1 />
        </>
    );
}

export default BlogNav;