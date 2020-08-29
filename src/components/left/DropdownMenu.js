import React, {useState} from 'react';
import Dropdown from "../common/dropdown/Dropdown";
import DropdownItem from "../common/dropdown/DropdownItem";

function DropdownMenu() {
  const [dropdown, setDropdown] = useState(false);

  const handleClick = (event) => {
    event.stopPropagation();
    setDropdown(!dropdown)
  };

  return (
    <div className="dropdown-menu">
      <button className="dots" onClick={handleClick}>
        <i className="material-icons">more_horiz</i>
      </button>
      <Dropdown open={dropdown}>
        <DropdownItem>
          Delete
        </DropdownItem>
        <DropdownItem>
          Archive
        </DropdownItem>
        <DropdownItem>
          Edit
        </DropdownItem>
      </Dropdown>
    </div>
  );
}

export default DropdownMenu;
