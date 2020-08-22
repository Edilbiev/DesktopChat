import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { messageSent } from "../../redux/actions";
import MessageSendButtons from "./MessageSendButtons";
import { useHotkeys } from "react-hotkeys-hook";

function MessageInput() {
  const myId = useSelector((state) => state.profile._id);
  const opened = useSelector((state) => state.chat.opened);

  const dispatch = useDispatch();
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    const { value } = event.target;

    const lastSymbol = value[value.length-1];

    if(lastSymbol !== "\n") {
      setMessage(event.target.value);
    }
  };

  const sendMessage = () => {
    if (message.length) {
      dispatch(messageSent(myId, opened, "text", message));
    }

    setMessage("")
  }

  const handleClick =() => {
    sendMessage();
  }

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      sendMessage()
    }
  };

  useHotkeys('shift+enter', (event) => {
    event.preventDefault();
    setMessage(message + "\n");
  });

  return (
    <div className="message-input">
      <div className="message-textarea">
        <textarea
          wrap="hard"
          cols="20"
          value={message}
          placeholder="Write a message"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </div>
      <div>
        <MessageSendButtons isTyping={message.length > 0} handleClick={handleClick} />
      </div>
    </div>
  );
}

export default MessageInput;
