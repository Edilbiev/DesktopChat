import React from "react";

function MessageSendButtons({ isTyping, handleClick }) {
  return (
    <>
      <button>
        <i className="material-icons">attach_file</i>
      </button>
      {isTyping ? (
        <button onClick={handleClick}>
          <i className="material-icons">send</i>
        </button>
      ) : (
        <button>
          <i className="material-icons">mic</i>
        </button>
      )}
    </>
  );
}

export default MessageSendButtons;
