import React from "react";
import { CSSTransition } from "react-transition-group";

function MessageSendButtons({ isTyping, handleClick }) {
  return (
    <>
      <button>
        <i className="material-icons">attach_file</i>
      </button>
      {isTyping ? (
        <CSSTransition in={isTyping} timeout={500} classNames="send-button">
          <button onClick={handleClick}>
            <i className="material-icons">send</i>
          </button>
        </CSSTransition>
      ) : (
        <CSSTransition timeout={1000} classNames="mic-button">
          <button>
            <i className="material-icons">mic</i>
          </button>
        </CSSTransition>
      )}
    </>
  );
}

export default MessageSendButtons;
