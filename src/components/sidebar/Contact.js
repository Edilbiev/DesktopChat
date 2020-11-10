import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { messageSearchStringClosed } from "../../redux/actions";
import Avatar from "../common/Avatar";
import DropdownMenu from "./DropdownMenu";
import dayjs from "dayjs";
import Calendar from "dayjs/plugin/calendar";

function Contact({ fullname, lastMessage, _id, online }) {
  const opened = useParams().id;
  const dispatch = useDispatch();

  const [showDots, setShowDots] = useState(false);

  const history = useHistory();

  const handleClick = () => {
    if (_id !== opened) {
      dispatch(messageSearchStringClosed());
      history.push(_id);
    }
  };

  const handleMouseEnter = () => {
    setShowDots(true);
  };

  const handleMouseLeave = () => {
    setShowDots(false);
  };

  const readIcon =
    lastMessage && lastMessage.read ? (
      <i className="material-icons">done_all</i>
    ) : (
      <i className="material-icons">done</i>
    );

  dayjs.extend(Calendar);
  const lastMessageString = lastMessage
    ? dayjs(lastMessage.time).calendar(null, {
      sameDay: "HH:mm",
      lastDay: "[Вчера]",
      lastWeek: "dddd",
      sameElse: "DD.MM.YY",
    })
    : null;

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
        {lastMessage && (
          <div className="last-message">
            {lastMessage.fromUserId !== _id && readIcon}
            {lastMessage.content.length > 16
              ? lastMessage.content.substring(0, 16) + "..."
              : lastMessage.content}
          </div>
        )}
      </div>
      <div className="recent-chats-time">
        {showDots ? <DropdownMenu /> : lastMessageString}
      </div>
    </div>
  );
}

export default Contact;
