import React from "react";
import { useParams } from "react-router-dom";
import ContactInfo from "./ContactInfo";
import Social from "./Social";
import Media from "./Media";

function ProfileBar() {
  const opened = useParams().id;

  if (opened === undefined) {
    return null;
  }

  return (
    <div className="settings-bar">
      <div className="settings-bar-inner">
        <ContactInfo />
        <Social />
        <Media />
      </div>
    </div>
  );
}

export default ProfileBar;
