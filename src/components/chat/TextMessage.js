import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import Avatar from "../common/Avatar";
import { settingsBarHandled } from "../../redux/actions";
import MessageDropdown from "./MessageDropdown";
import dayjs from "dayjs";

function TextMessage({ isInbox, message }) {
  const dispatch = useDispatch();

  const opened = useParams().id;

  const contactInfo = useSelector((state) =>
    state.contacts.items.find((item) => item._id === opened)
  );

  const [showArrow, setShowArrow] = useState(false);

  const handleMouseEnter = () => {
    setShowArrow(true);
  };

  const handleMouseLeave = () => {
    setShowArrow(false);
  };

  const type = isInbox ? "inbox" : "outbox";

  const readIcon = message.read ? (
    <i className="material-icons">done_all</i>
  ) : (
    <i className="material-icons">done</i>
  );

  const handleShowSettings = () => {
    dispatch(settingsBarHandled());
  };

  return (
    <div className={`${type}-message-outer`}>
      {isInbox && (
        <Avatar
          label={contactInfo.fullname[0]}
          size="small"
          onclick={handleShowSettings}
        />
      )}
      <div
        className={`${type}-message`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="message-text">{message.content}</div>
        <div className="message-time">
          {dayjs (message.time).format("HH:mm")}
          {!isInbox && !message.sending && readIcon}
          {message.sending && <i className="material-icons">schedule</i>}
        </div>
        {showArrow && (
          <MessageDropdown messageId={message._id} />
        )}
      </div>
    </div>
  );
}

TextMessage.propTypes = {
  type: PropTypes.string.isRequired,
};

TextMessage.defaultProps = {
  type: "outbox",
};

export default TextMessage;
