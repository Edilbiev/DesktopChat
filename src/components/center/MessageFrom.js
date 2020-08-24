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
        {message.read ? <i className="material-icons">done_all</i> : <i className="material-icons">done</i>}
      </div>
    </div>
  );
}

export default MessageFrom;
