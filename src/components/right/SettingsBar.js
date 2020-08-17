import React from "react";
import ContactInfo from "./ContactInfo";
import { useSelector } from "react-redux";
import Social from "./Social";
import Media from "./Media";

function SettingsBar() {
  const settingsBarOpened = useSelector(
    (state) => state.application.settingsBarOpened
  );
  const opened = useSelector((state) => state.chat.opened);

  if (opened === null) {
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
