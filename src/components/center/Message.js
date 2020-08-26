import React from "react";
import { useSelector } from "react-redux";
import InfoMessage from "./InfoMessage";
import TextMessage from "./TextMessage";

function Message({ message }) {
  const myId = useSelector((state) => state.profile._id);

    if (message.type === "info") {
      return <InfoMessage text={message.content} key={message._id} />;
    }

    return <TextMessage message={message} isInbox={message.toUserId === myId}/>


}

export default Message;
