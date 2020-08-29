import React, {useState} from 'react';
import {CSSTransition} from "react-transition-group";
import Dropdown from "../common/dropdown/Dropdown";
import DropdownItem from "../common/dropdown/DropdownItem";
import {messageDeleted} from "../../redux/actions";
import {useDispatch} from "react-redux";

function MessageDropdown({ isShowed, messageId }) {
  const dispatch = useDispatch();
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => {
    setDropdown(!dropdown)
  };

  const handleDelete = () => {
    dispatch(messageDeleted(messageId))
  };

  return (
    <div>
      <CSSTransition in={isShowed} timeout={800} classNames="dropdown-arrow">
        <button className="dropdown-arrow" onClick={handleClick}>
          <i className="material-icons">keyboard_arrow_down</i>
        </button>
      </CSSTransition>
      <Dropdown open={dropdown} type="message">
        <DropdownItem action={handleDelete}>
          Delete
        </DropdownItem>
      </Dropdown>
    </div>
  );
}

export default MessageDropdown;
