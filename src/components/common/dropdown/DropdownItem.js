import React from "react";

function DropdownItem({ children, action }) {
  return (
    <div className="dropdown-item" onClick={action}>
      {children}
    </div>
  );
}

export default DropdownItem;
