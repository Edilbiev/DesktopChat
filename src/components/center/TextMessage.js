import React from "react";
import moment from "moment";
import PropTypes from "prop-types";
import Avatar from "../common/Avatar";
import {useDispatch, useSelector} from "react-redux";
import {settingsBarHandled} from "../../redux/actions";

function TextMessage({ isInbox, message, label }) {
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
        <div className="message-time">
          {moment(message.time).format("HH:mm")}
          {(!isInbox && !message.sending) && readIcon}
          {message.sending && <i className="material-icons">schedule</i>}
        </div>
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
