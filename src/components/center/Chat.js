import React, {useRef} from "react";
import Message from "./Message";

function Chat() {
  return (
    <div className="chat" id="chat-window">
      <div className="chat-inner">
        <Message />
      </div>
    </div>
  );
}

export default Chat;
