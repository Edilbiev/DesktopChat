import React from 'react';

function Dropdown({ open, children }) {
  if (open === false) {
    return null
  }

  return (
    <div className="dropdown">{children}</div>
  );
}

export default Dropdown;
