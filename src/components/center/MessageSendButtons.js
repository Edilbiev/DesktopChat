import React from "react";

function MessageSendButtons({ isTyping, handleClick }) {
  return (
    <>
      <button>
        <i className="fa fa-paperclip" aria-hidden="true"></i>
      </button>
      {isTyping ? (
        <button onClick={handleClick}>
          <i className="fa fa-paper-plane" aria-hidden="true"></i>
        </button>
      ) : (
        <button>
          <i className="fa fa-microphone" aria-hidden="true"></i>
        </button>
      )}
    </>
  );
}

export default MessageSendButtons;
