import React from 'react';
import './OwnerCard.scss';

function OwnerCard({ owner : { id, name, url }}) {

  return (
    <>
      <div className="owner-container">
        <div className="owner-image">
          <img src={url} />
        </div>
        <div className="owner-info-container">
          <div className="owner-info">
            {name}
          </div>
        </div>
      </div>
    </>
  );
}


export default OwnerCard;
