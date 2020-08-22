import React from "react";
import moment from "moment";


function MessageTo({ message, contactInfo }) {
  return (
    <>
      <div className="message-to">
        <div className="message-to-avatar">{contactInfo.fullname[0]}</div>
        <div className="message-to-text">
          {message.content}
        </div>
        <div className="message-time">
          {moment(message.time).format('HH:mm')}
        </div>
      </div>
    </>
  );
}

export default MessageTo;

