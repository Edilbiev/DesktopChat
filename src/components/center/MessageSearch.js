import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {messageSearchStringSet} from "../../redux/actions";

function MessageSearch() {
  const dispatch = useDispatch();
  const isMessageSearchStringOpened = useSelector(
    (state) => state.application.isMessageSearchStringOpened
  );
  const searchString = useSelector(
    (state) => state.application.messageSearchString
  );
  const handleChange = (event) => {
    dispatch(messageSearchStringSet(event.target.value));
  };

  return (
    <div>
      <input
        value={searchString}
        onChange={handleChange}
        className={
          isMessageSearchStringOpened
            ? "message-search-opened"
            : "message-search-closed"
        }
      />
    </div>
  );
}

export default MessageSearch;
