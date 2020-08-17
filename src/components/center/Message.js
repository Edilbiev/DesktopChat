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
  const searchString = useSelector(
    (state) => state.application.messageSearchString
  );
  const chat = useSelector((state) => {
    return state.chat.items.filter(
      (item) =>
        item.content.toUpperCase().indexOf(searchString.toUpperCase()) !== -1
    );
  });

  return (
    <>
      {chat.map((message) => {
        if (message.type === "info") {
          return <InfoMessage text={message.content} />;
        }
        if (message.toUserId === myId) {
          return (
            <MessageTo
              message={message}
              contactInfo={contactInfo}
              key={chat._id}
            />
          );
        }

        return <MessageFrom message={message} key={chat._id} />;
      })}
    </>
  );
}

export default Message;
