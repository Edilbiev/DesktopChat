import React from "react";
import { useSelector } from "react-redux";

function Social() {
  const opened = useSelector((state) => state.chat.opened);
  const contactInfo = useSelector((state) =>
    state.contacts.items.find((item) => item._id === opened)
  );

  return (
    <div>
      Social
      <div className="social">
        {contactInfo.socials.instagram && (
          <div className="social-item">
            <div className="social-icon">
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </div>
            {contactInfo.socials.instagram}
          </div>
        )}
        {contactInfo.socials.twitter && (
          <div className="social-item">
            <div className="social-icon">
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </div>
            {contactInfo.socials.twitter}
          </div>
        )}
        {contactInfo.socials.facebook && (
          <div className="social-item">
            <div className="social-icon">
              <i className="fa fa-facebook" aria-hidden="true"></i>
            </div>
            {contactInfo.socials.facebook}
          </div>
        )}
      </div>
    </div>
  );
}

export default Social;
