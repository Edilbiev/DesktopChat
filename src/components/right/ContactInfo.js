import React from "react";
import { useSelector } from "react-redux";
import Avatar from "../common/Avatar";

function ContactInfo() {
  const opened = useSelector((state) => state.chat.opened);
  const contactInfo = useSelector((state) =>
    state.contacts.items.find((item) => item._id === opened)
  );

  return (
    <div className="contact-info">
      <Avatar label={contactInfo.fullname[0]} size="big"/>
      <div>{contactInfo.fullname}</div>
      <div className="username">@{contactInfo.username}</div>
      <div className="contact-info-icons">
        <button>
          <i className="material-icons">call</i>
        </button>
        <button>
          <i className="material-icons">videocam</i>
        </button>
        <button>
          <i className="material-icons">mail</i>
        </button>
      </div>
    </div>
  );
}

export default ContactInfo;
