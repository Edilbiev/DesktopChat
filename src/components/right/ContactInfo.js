import React from "react";
import { useSelector } from "react-redux";

function ContactInfo() {
  const opened = useSelector((state) => state.chat.opened);
  const contactInfo = useSelector((state) =>
    state.contacts.items.find((item) => item._id === opened)
  );

  return (
    <div className="contact-info">
      <div className="contact-info-avatar">{contactInfo.fullname[0]}</div>
      <div>{contactInfo.fullname}</div>
      <div className="last-message">{contactInfo.username}@mail.com</div>
      <div className="contact-info-icons">
        <button>
          <i className="fa fa-phone" aria-hidden="true"></i>
        </button>
        <button>
          <i className="fa fa-video-camera" aria-hidden="true"></i>
        </button>
        <button>
          <i className="fa fa-envelope" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
}

export default ContactInfo;
