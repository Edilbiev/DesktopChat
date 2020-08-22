import React from "react";
import moment from "moment";

function MessageFrom({ message }) {
  return (
    <div className="message-from">
      <div className="message-from-inner">
        <div>
          {message.content}
        </div>
      </div>
      <div className="message-time">
        {moment(message.time).format('HH:mm')}
        <i className={message.read ? "fa fa-check read" : "fa fa-check"} aria-hidden="true"/>
      </div>
    </div>
  );
}

export default MessageFrom;
