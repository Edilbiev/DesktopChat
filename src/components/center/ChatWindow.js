import React from "react";
import ChatHeader from "./ChatHeader";
import Chat from "./Chat";
import MessageInput from "./MessageInput";
import { useSelector } from "react-redux";
import InfoMessage from "./InfoMessage";

function ChatWindow() {
  const opened = useSelector((state) => state.chat.opened);

  if (opened === null) {
    return <InfoMessage text="Please, select a chat to start messaging" />;
  }
  return (
    <div className="chat-window">
      <div className="chat-window-inner">
        <ChatHeader />
        <Chat />
        <MessageInput />
      </div>
    </div>
  );
}

export default ChatWindow;
