import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useHistory, useParams} from "react-router-dom";
import {chatLoaded, messageSearchStringClosed} from "../../redux/actions";
import Avatar from "../common/Avatar";
import DropdownMenu from "./DropdownMenu";

function ContactWithoutLastMessage({ fullname, _id, online }) {
  const myId = useSelector((state) => state.profile._id);
  const opened = useParams().id;
  const dispatch = useDispatch();

  const [showDots, setShowDots] = useState(false);

  const history = useHistory();

  const handleClick = () => {
    if (_id !== opened) {
      dispatch(messageSearchStringClosed())
      history.push(_id)
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
      </div>
      <div className="recent-chats-time">
        {showDots ? <DropdownMenu/> : null}
      </div>
    </div>
  );
}

export default ContactWithoutLastMessage;
