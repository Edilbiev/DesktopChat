import React from "react";

function InfoMessage({ text }) {
  return (
    <div className="info-message">
      <div className="info-message-text">{text}</div>
    </div>
  );
}

export default InfoMessage;
