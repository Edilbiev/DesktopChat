import React from "react";
import PropTypes from "prop-types";
import OnlineIndicator from "./OnlineIndicator";

function Avatar({ label, online, size, onclick }) {
  return (
    <div className={`avatar-size-${size}`} onClick={onclick}>
      {online && <OnlineIndicator customClass="online-indicator-contact" />}
      {label}
    </div>
  );
}

Avatar.propTypes = {
  size: PropTypes.string.isRequired,
  label: PropTypes.string,
  online: PropTypes.bool.isRequired,
};

Avatar.defaultProps = {
  size: "medium",
  online: false,
};

export default Avatar;
