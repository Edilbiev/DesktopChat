import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {chatLoaded, messageSearchStringClosed} from "../../redux/actions";
import DropdownMenu from "./DropdownMenu";
import Avatar from "../common/Avatar";

function Contact({ fullname, lastMessage, _id, online }) {
  const myId = useSelector((state) => state.profile._id);
  const opened = useSelector((state) => state.chat.opened);
  const dispatch = useDispatch();

  const [showDots, setShowDots] = useState(false);

  const handleClick = () => {
    if (_id !== opened) {
      dispatch(messageSearchStringClosed())
      dispatch(chatLoaded(myId, _id))
    }
  }

  const handleMouseEnter = () => {
    setShowDots(true)
  };

  const handleMouseLeave = () => {
    setShowDots(false)
  };

  return (
    <div
      className={_id === opened ? "chats-item-opened" : "chats-item"}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Avatar online={online} label={fullname[0]} />
      <div className="chat-item-center">
        <div>{fullname}</div>
        <div className="last-message">
          {lastMessage.substring(0, 18) + "..."}
        </div>
      </div>
      <div className="recent-chats-time">
        {showDots ? <DropdownMenu/> : '9:00'}
      </div>
    </div>
  );
}

export default Contact;
