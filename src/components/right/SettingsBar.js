import React from "react";
import ContactInfo from "./ContactInfo";
import { useSelector } from "react-redux";
import Social from "./Social";
import Media from "./Media";
import {useParams} from "react-router-dom";

function SettingsBar() {
  const settingsBarOpened = useSelector(
    (state) => state.application.settingsBarOpened
  );
  const opened = useParams().id;

  if (opened === undefined) {
    return null;
  }

  return (
    <div className={settingsBarOpened ? "settings-bar" : "settings-bar-closed"}>
      <div className="settings-bar-inner">
        <ContactInfo />
        <Social />
        <Media />
      </div>
    </div>
  );
}

export default SettingsBar;
