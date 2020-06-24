import React from 'react';
import './Social.scss';
import { faGoogle, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Social() {
  return (

  <ul className="social">
    <li>
      <a href="#">
        <FontAwesomeIcon icon={faFacebook} />
      </a>
    </li>
    <li>
      <a href="#">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
    </li>
    <li>
      <a href="#">
        <FontAwesomeIcon icon={faGoogle} />
      </a>
    </li>
  </ul>
  );
}


export default Social;