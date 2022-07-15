import React from 'react';
import Header from './Header';

function Header2({ subTitle }) {
    return (
        <>
            <Header />
            <div className="d-relf-banner5 sab-bnr charity-overlay">
                <div className="container">
                    <div className="d-help-sab-banner-text">
                        <h2>{subTitle.title}</h2>
                        <ul className="breadcrumb">
                            <li><a href="#">{subTitle.root}</a></li>
                            <li className="active"> <a> {subTitle.current}</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header2;