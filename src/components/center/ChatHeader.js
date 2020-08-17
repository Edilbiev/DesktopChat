import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  messageSearchStringOpened,
  messageSearchStringSet,
  settingsBarHandled,
} from "../../redux/actions";

function ChatHeader() {
  const loading = useSelector((state) => state.chat.loading);
  const isMessageSearchStringOpened = useSelector(
    (state) => state.application.isMessageSearchStringOpened
  );
  const searchString = useSelector(
    (state) => state.application.messageSearchString
  );
  const opened = useSelector((state) => state.chat.opened);
  const contactInfo = useSelector((state) =>
    state.contacts.items.find((item) => item._id === opened)
  );
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(messageSearchStringSet(event.target.value));
  };

  return (
    <div className="chat-header">
      <div>
        <button onClick={() => dispatch(messageSearchStringOpened())}>
          <i className="fa fa-search" aria-hidden="true"></i>
        </button>
        <input
          autoFocus={true}
          value={searchString}
          onChange={handleChange}
          className={
            isMessageSearchStringOpened
              ? "message-search-opened"
              : "message-search-closed"
          }
        />
      </div>
      <div>
        {loading ? (
          <div>
            <i className="fa fa-refresh fa-spin" aria-hidden="true"></i>{" "}
            Updating...
          </div>
        ) : (
          <div>{contactInfo.fullname}</div>
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
