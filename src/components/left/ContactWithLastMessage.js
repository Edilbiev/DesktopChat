import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useHistory, useParams} from "react-router-dom";
import {chatLoaded, messageSearchStringClosed} from "../../redux/actions";
import Avatar from "../common/Avatar";
import DropdownMenu from "./DropdownMenu";
import moment from "moment";

function ContactWithLastMessage({ fullname, lastMessage, _id, online }) {
  const myId = useSelector((state) => state.profile._id);
  const opened = useParams().id;
  const dispatch = useDispatch();

  const [showDots, setShowDots] = useState(false);

  const history = useHistory();

  const handleClick = () => {
    if (_id !== opened) {
      history.push(_id)
    }
  }

  const handleMouseEnter = () => {
    setShowDots(true)
  };

  const handleMouseLeave = () => {
    setShowDots(false)
  };

  const readIcon = lastMessage.read ? (
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
          {lastMessage.fromUserId !== _id && readIcon}
          {lastMessage.content.length > 16 ?
            lastMessage.content.substring(0, 16) + "..." :
            lastMessage.content
          }
        </div>
      </div>
      <div className="recent-chats-time">
        {showDots ? <DropdownMenu/> : moment(lastMessage.time).format("HH:mm")}
      </div>
    </div>
  );
}

export default ContactWithLastMessage;
