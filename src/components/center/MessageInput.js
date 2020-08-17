import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { messageSent } from "../../redux/actions";

function MessageInput() {
  const myId = useSelector((state) => state.profile._id);
  const opened = useSelector((state) => state.chat.opened);

  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      dispatch(messageSent(myId, opened, "text", message));
    }
  };

  return (
    <div className="message-input">
      <input
        placeholder="Write a message"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button>
        <i className="fa fa-paperclip" aria-hidden="true"></i>
      </button>
      <button>
        <i className="fa fa-smile-o" aria-hidden="true"></i>
      </button>
    </div>
  );
}

export default MessageInput;
