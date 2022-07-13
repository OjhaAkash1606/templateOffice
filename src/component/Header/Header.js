import React from 'react';
import UperNavbar from './UperNav';
import LowerNavbar from './LowerNavbar';


function Header() {
    return (
        <header className="d-hlp-header6">
            <div className="d-help-top-wrap">
                <div className="container">
                    <UperNavbar />
                    <LowerNavbar />


                </div>
            </div>
        </header>
    );
}

export default Header;