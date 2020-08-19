import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  messageSearchStringOpened,
  settingsBarHandled,
} from "../../redux/actions";
import MessageSearch from "./MessageSearch";
import OnlineIndicator from "./OnlineIndicator";

function ChatHeader() {
  const loading = useSelector((state) => state.chat.loading);

  const opened = useSelector((state) => state.chat.opened);
  const contactInfo = useSelector((state) =>
    state.contacts.items.find((item) => item._id === opened)
  );
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(messageSearchStringOpened())
  }

  return (
    <div className="chat-header">
      <div>
        <button onClick={handleClick}>
          <i className="fa fa-search" aria-hidden="true"></i>
        </button>
        <MessageSearch />
      </div>
      <div>
        {loading ? (
          <div>
            <i className="fa fa-refresh fa-spin" aria-hidden="true"></i>{" "}
            Updating...
          </div>
        ) : (
          <div className="chat-header-name">
            {contactInfo.fullname}
            <OnlineIndicator />
          </div>
        )}
      </div>
      <div>
        <button onClick={() => dispatch(settingsBarHandled())}>
          <i className="fa fa-cog" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
}

export default ChatHeader;
