import React from 'react';
import OnlineIndicator from "./OnlineIndicator";

function Avatar() {
  return (
    <div className="avatar">
      <OnlineIndicator customClass="online-indicator-contact" />
      {fullname[0]}
    </div>
  );
}

export default Avatar;
