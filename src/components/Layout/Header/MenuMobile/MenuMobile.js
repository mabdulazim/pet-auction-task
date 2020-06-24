import React, { useState } from 'react';
import './MenuMobile.scss';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Social from '../Social';
import ProfileInfo from '../ProfileInfo';

function MenuMobile() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <>
        <div onClick={() => setShowMobileMenu(true)}>
            <FontAwesomeIcon icon={faBars} />
        </div>

        {showMobileMenu &&
        <div className="menu-mobile-container">

            <div className="menu-mobile-close-icon" onClick={() => setShowMobileMenu(false)}>
                <FontAwesomeIcon icon={faTimes} />
            </div>

            <ul className="menu">
                <li><a href="#">Explore</a></li>
                <li><a href="#">All Pets</a></li>
                <li><a href="#">About</a></li>
            </ul>

            <div className="menu-profile-info-container">
                <ProfileInfo />
            </div>

            <div className="menu-social-container">
                <Social />
            </div>

        </div>
        }
    </>
  );
}


export default MenuMobile;