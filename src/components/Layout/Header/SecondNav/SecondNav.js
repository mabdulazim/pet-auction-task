import React from 'react';
import './SecondNav.scss';
import ProfileInfo from '../ProfileInfo/ProfileInfo';
import { Link } from 'react-router-dom';

function SecondNav() {

  return (
    <nav>
      <div className="second-nav-container">
        <div className="second-nav">

          <div className="menu-container">
            <ul className="menu">
              <li className="active">
                <Link to="/">Explore</Link>
              </li>
              <li>
                <Link to="/">All Pets</Link>
              </li>
              <li>
                <Link to="/">About</Link>
              </li>
            </ul>
          </div>

          <ProfileInfo />

        </div>
      </div>
    </nav>
  );
}


export default SecondNav;