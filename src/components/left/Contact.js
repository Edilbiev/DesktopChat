import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {chatLoaded, messageSearchStringClosed} from "../../redux/actions";
import DropdownMenu from "./DropdownMenu";
import Avatar from "../common/Avatar";
import moment from "moment";


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

  const readIcon = lastMessage && lastMessage.read ? (
    <i className="material-icons">done_all</i>
  ) : (
    <i className="material-icons">done</i>
  );

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
          {lastMessage && lastMessage.fromUserId !== _id && readIcon}
          {lastMessage && lastMessage.content.length > 16 ?
            lastMessage && lastMessage.content.substring(0, 16) + "..." :
            lastMessage && lastMessage.content
          }
        </div>
      </div>
      <div className="recent-chats-time">
        {showDots ? <DropdownMenu/> : lastMessage && moment(lastMessage.time).format("HH:mm")}
      </div>
    </div>
  );
}

export default Contact;
