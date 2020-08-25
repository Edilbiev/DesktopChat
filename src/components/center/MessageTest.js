import React from 'react';
import moment from "moment";
import PropTypes from "prop-types";

function MessageTest({ type, message, label }) {
  return (
    <div className={`${type}-message-outer`}>
      <div className={`${type}-message`}>
        <div className="message-text">
          {message.content}
        </div>
        <div className="time">
          {moment(message.time).format('HH:mm')}
          {message.read ? <i className="material-icons">done_all</i> : <i className="material-icons">done</i>}
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
