import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { messageSent } from "../../redux/actions";
import MessageSendButtons from "./MessageSendButtons";

function MessageInput() {
  const myId = useSelector((state) => state.profile._id);
  const opened = useSelector((state) => state.chat.opened);

  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 13 && event.target.value !== '') {
      dispatch(messageSent(myId, opened, "text", message));
      setMessage(event.target.value = '')
    }
  };

  return (
    <div className="message-input">
      <input
        placeholder="Write a message"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <MessageSendButtons />
    </div>
  );
}

export default MessageInput;
