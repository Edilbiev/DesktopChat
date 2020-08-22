import React from "react";

function MessageSendButtons({ isTyping, handleClick }) {
  return (
    <>
      <button>
        <i className="material-icons">paperclip</i>
      </button>
      {isTyping ? (
        <button onClick={handleClick}>
          <i className="material-icons">send</i>
        </button>
      ) : (
        <button>
          <i className="material-icons">microphone</i>
        </button>
      )}
    </>
  );
}

export default MessageSendButtons;
