import {scrollChatToBottom} from "../utils/dom";

export function profileLoaded() {
  return (dispatch) => {
    dispatch({ type: "profile/load/started" });

    fetch("http://151.248.117.7:8001/api/profile")
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "profile/load/succeed",
          payload: json,
        });
      });
  };
}

export function contactsLoaded() {
  return (dispatch) => {
    dispatch({ type: "contacts/load/started" });

    fetch("http://151.248.117.7:8001/api/contacts")
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "contacts/load/success",
          payload: json,
        });
      });
  };
}

export function chatLoaded(myId, contactId) {
  return (dispatch) => {
    dispatch({
      type: "chat/load/started",
      payload: contactId,
    });

    fetch(`http://151.248.117.7:8001/api/messages/${myId}/${contactId}`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "chat/load/success",
          payload: json,
        });

        scrollChatToBottom()
      });
  };
}

function messageSentBegin(messageObject, nextTempId) {
  return {
    type: 'message/send/started',
    payload: {
      ...messageObject,
      nextTempId
    }
  }
}

export function messageSent(messageObject) {
  return async (dispatch, getState) => {
    const { nextTempId } = getState().chat;

    await dispatch(messageSentBegin(messageObject, nextTempId));

    scrollChatToBottom();

    fetch("http://151.248.117.7:8001/api/messages", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(messageObject),
    })
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "message/send/succeed",
          payload: {
            ...json,
            nextTempId
          }
        });
      });
  };
}

export function contactSearchStringSet(value) {
  return {
    type: "contacts/search/set",
    payload: value,
  };
}

export function messageSearchStringHandled() {
  return {
    type: "message/search/handled",
  };
}

export function messageSearchStringClosed() {
  return {
    type: "message/search/closed"
  }
}

export function messageSearchStringCleared() {
  return {
    type: "message/search/cleared"
  }
}

export function messageSearchStringSet(value) {
  return {
    type: "message/search/set",
    payload: value,
  };
}

export function settingsBarHandled() {
  return { type: "settings/bar/handled" };
}
