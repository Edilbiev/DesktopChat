import React from "react";
import PropTypes from "prop-types";

function Dropdown({ open, children, type }) {
  if (open === false) {
    return null;
  }

  return <div className={`${type}-dropdown`}>{children}</div>;
}

Dropdown.propTypes = {
  type: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
};

Dropdown.defaultProps = {
  type: "contact",
};

export default Dropdown;
