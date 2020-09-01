import React, {useEffect} from "react";
import ChatHeader from "./ChatHeader";
import Chat from "./Chat";
import MessageInput from "./MessageInput";
import {useDispatch, useSelector} from "react-redux";
import InfoMessage from "./InfoMessage";
import {useParams} from "react-router-dom";
import {chatLoaded, messageSearchStringClosed} from "../../redux/actions";


function ChatWindow() {
  // const opened = useSelector((state) => state.chat.opened);
  const opened = useParams().id;
  const dispatch = useDispatch();
  const myId = useSelector(state => state.profile._id);

  useEffect(() => {
    alert()
    dispatch(messageSearchStringClosed())
    dispatch(chatLoaded(myId, opened))
  }, [dispatch, myId]);

  if (opened === undefined) {
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
