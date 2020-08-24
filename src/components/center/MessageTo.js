import React from "react";
import moment from "moment";
import Avatar from "../common/Avatar";


function MessageTo({ message, contactInfo }) {
  return (
    <>
      <div className="message-to">
        <Avatar label={contactInfo.fullname[0]} size="small"/>
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

