import React from 'react';
import './ProfileInfo.scss';
import userPhoto from '../../../../assets/images/user.jpg';

function ProfileInfo() {

  return (
    <div className="profile-container">
        <div className="profile-img">
            <img src={userPhoto} />
        </div>

        <div className="profile-info">
            <span>Muhammad Abdul Azim</span>
            <span>Front End Engineer</span>
        </div>
    </div>
  );
}


export default ProfileInfo;