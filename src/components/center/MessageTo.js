import React from "react";

function MessageTo({ message, contactInfo }) {
  return (
    <div className="message-from">
      <div className="message-from-avatar">{contactInfo.fullname[0]}</div>
      <div className="message-from-text">{message.content}</div>
    </div>
  );
}

export default MessageTo;
