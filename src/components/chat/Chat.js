import React from "react";
import { useSelector } from "react-redux";
import Message from "./Message";

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
  const chatLoading = useSelector((state) => state.chat.loading);
  if (chatLoading) {
    return null
  }

  return (
    <div className="chat" id="chat-window">
      <div className="chat-inner">
        {chat.map((message) => (
          <Message key={message._id} message={message} />
        ))}
      </div>
    </div>
  );
}

export default Chat;
