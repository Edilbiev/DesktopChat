import React, {useState} from 'react';
import Dropdown from "./Dropdown";
import DropdownItem from "./DropdownItem";

function DropdownMenu(props) {
  const [dropdown, setDropdown] = useState(false);

  const handleClick = (event) => {
    event.stopPropagation();
    setDropdown(!dropdown)
  };

  return (
    <div className="dropdown-menu">
      <button className="dots" onClick={handleClick}>
        <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
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
