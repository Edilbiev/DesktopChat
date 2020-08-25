import React from "react";
import moment from "moment";
import PropTypes from "prop-types";
import Avatar from "../common/Avatar";
import {useDispatch, useSelector} from "react-redux";
import {settingsBarHandled} from "../../redux/actions";

function MessageTest({ isInbox, message, label }) {
  const dispatch = useDispatch();
  const opened = useSelector((state) => state.chat.opened);
  const contactInfo = useSelector((state) =>
    state.contacts.items.find((item) => item._id === opened)
  );

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
      {isInbox && <Avatar label={contactInfo.fullname[0]} size="small" onclick={handleShowSettings}/>}
      <div className={`${type}-message`}>
        <div className="message-text">{message.content}</div>
        <div className="time">
          {moment(message.time).format("HH:mm")}
          {(!isInbox && !message.sending) && readIcon}
          {message.sending && '---'}
        </div>
      </div>
    </div>
  );
}

MessageTest.propTypes = {
  type: PropTypes.string.isRequired,
};

MessageTest.defaultProps = {
  type: "outbox",
};

export default MessageTest;
