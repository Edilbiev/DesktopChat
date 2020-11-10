import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ChatHeader from "./ChatHeader";
import Chat from "./Chat";
import MessageInput from "./MessageInput";
import InfoMessage from "./InfoMessage";
import { chatLoaded } from "../../redux/actions";

function ChatWindow() {
  const opened = useParams().id;
  const dispatch = useDispatch();

  const myId = useSelector((state) => state.profile._id);

  useEffect(() => {
    if (opened) {
      dispatch(chatLoaded(myId, opened));
    }
  }, [dispatch, myId, opened]);

  if (!opened) {
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
