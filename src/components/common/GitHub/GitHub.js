import React from "react";
import logo from "./iconmonstr-github-1.svg";

function GitHub() {
  return (
    <a href="https://github.com/Edilbiev/react-desktop-chat">
      <div className="github-outer">
        <img src={logo} alt="github" className="github" />
      </div>
    </a>
  );
}

export default GitHub;
