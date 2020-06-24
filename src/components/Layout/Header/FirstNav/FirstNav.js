import React, { useState } from 'react';
import './FirstNav.scss';
import Social from '../Social';
import MenuMobile from '../MenuMobile';

function FirstNav() {
    return (
        <nav>
            <div className="first-nav-container">
                <div className="first-nav">

                    <div className="companyLogo">
                        Company Name
                    </div>

                    <div className="menu-mobile-open-icon">
                        <MenuMobile />
                    </div>

                    <div className="social-container">
                        <Social />
                    </div>
                </div>
            </div>
        </nav>
    );
}


export default FirstNav;