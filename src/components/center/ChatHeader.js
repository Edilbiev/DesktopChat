import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  messageSearchStringHandled,
  settingsBarHandled,
} from "../../redux/actions";
import MessageSearch from "./MessageSearch";
import OnlineIndicator from "../common/OnlineIndicator";
import { useHotkeys } from "react-hotkeys-hook";
import {useParams} from "react-router-dom";

function ChatHeader() {
  const loading = useSelector((state) => state.chat.loading);

  console.log(loading)

  const opened = useParams().id;
  const contactInfo = useSelector((state) =>
    state.contacts.items.find((item) => item._id === opened)
  );
  const dispatch = useDispatch();

  const handleShowSearchString = () => {
    dispatch(messageSearchStringHandled());
  };

  const handleShowSettings = () => {
    dispatch(settingsBarHandled());
  };

  useHotkeys("ctrl+p", (event) => {
    event.preventDefault();
    handleShowSettings();
  });

  return (
    <div className="chat-header">
      <div>
        <button
          onClick={handleShowSearchString}
          className="message-search-button"
        >
          <i className="material-icons">search</i>
        </button>
        <MessageSearch />
      </div>
      <div>
        {loading ? (
          <div className="update">
            <i className="material-icons refresh">autorenew</i> Updating...
          </div>
        ) : (
          <div className="chat-header-name">
            {contactInfo.fullname}
            {contactInfo.online && (
              <OnlineIndicator customClass="online-indicator-header" />
            )}
          </div>
        )}
      </div>
      <div>
        <button onClick={handleShowSettings}>
          <i className="material-icons">web</i>
        </button>
      </div>
    </div>
  );
}

export default ChatHeader;
