import React from "react";
import Message from "./Message";
import {useSelector} from "react-redux";

function Chat() {
  const chat = useSelector((state) => {
    const { messageSearchString } = state.application;
    return state.chat.items.filter(
      (item) =>
        item.content
          .toUpperCase()
          .indexOf(messageSearchString.toUpperCase()) !== -1
    );
  });

  return (
    <div className="chat" id="chat-window">
      <div className="chat-inner">
        {chat.map((message) => <Message key={message._id} message={message} />)}
      </div>
    </div>
  );
}

export default Chat;
