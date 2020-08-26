import React, {useState} from 'react';
import {CSSTransition} from "react-transition-group";
import Dropdown from "../common/dropdown/Dropdown";
import DropdownItem from "../common/dropdown/DropdownItem";

function MessageDropdown({ isShowed }) {
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => {
    setDropdown(!dropdown)
  };

  return (
    <>
      <CSSTransition in={isShowed} timeout={800} classNames="dropdown-arrow">
        <button className="dropdown-arrow" onClick={handleClick}>
          <i className="material-icons">keyboard_arrow_down</i>
        </button>
      </CSSTransition>
      <Dropdown open={dropdown}>
        <DropdownItem>
          Delete
        </DropdownItem>
      </Dropdown>
    </>
  );
}

export default MessageDropdown;
