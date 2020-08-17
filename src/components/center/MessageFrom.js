import React from "react";

function MessageFrom({ message }) {
  return (
    <div className="message-to">
      <div className="message-to-inner">{message.content}</div>
    </div>
  );
}

export default MessageFrom;
