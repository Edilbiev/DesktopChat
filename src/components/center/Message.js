import React from "react";
import MessageTo from "./MessageTo";
import MessageFrom from "./MessageFrom";
import { useSelector } from "react-redux";
import InfoMessage from "./InfoMessage";

function Message() {
  const opened = useSelector((state) => state.chat.opened);
  const myId = useSelector((state) => state.profile._id);
  const contactInfo = useSelector((state) =>
    state.contacts.items.find((item) => item._id === opened)
  );

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
    <>
      {chat.map((message) => {
        if (message.type === "info") {
          return <InfoMessage text={message.content} key={message._id} />;
        }
        if (message.toUserId === myId) {
          return (
            <MessageTo
              message={message}
              contactInfo={contactInfo}
              key={message._id}
            />
          );
        }

        return <MessageFrom message={message} key={message._id} />;
      })}
    </>
  );
}

export default Message;
