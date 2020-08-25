import React from "react";
import MessageTo from "./MessageTo";
import MessageFrom from "./MessageFrom";
import { useSelector } from "react-redux";
import InfoMessage from "./InfoMessage";
import MessageTest from "./MessageTest";

function Message({ message }) {
  const opened = useSelector((state) => state.chat.opened);
  const myId = useSelector((state) => state.profile._id);
  const isOutbox = message.toUserId === myId;
  const contactInfo = useSelector((state) =>
    state.contacts.items.find((item) => item._id === opened)
  );

    if (message.type === "info") {
      return <InfoMessage text={message.content} key={message._id} />;
    }
    if (message.toUserId === myId) {
      return (
       <MessageTest message={message} type="inbox" />
      );
    }

    return <MessageTest message={message}/>;

}

export default Message;
