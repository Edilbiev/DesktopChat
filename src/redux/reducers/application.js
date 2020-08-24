const initialState = {
  contactSearchString: "",
  settingsBarOpened: false,
  isMessageSearchStringOpened: false,
  messageSearchString: "",
};

export default function application(state = initialState, action) {
  const { payload, type } = action;
  switch (type) {
    case "contacts/search/set":
      return {
        ...state,
        contactSearchString: payload,
      };

    case "settings/bar/handled":
      return {
        ...state,
        settingsBarOpened: !state.settingsBarOpened,
      };

    case "message/search/handled":
      return {
        ...state,
        messageSearchString: "",
        isMessageSearchStringOpened: !state.isMessageSearchStringOpened,
      };

    case "message/search/closed":
      return {
        ...state,
        messageSearchString: "",
        isMessageSearchStringOpened: false,
      };

    case "message/search/cleared":
      return {
        ...state,
        messageSearchString: "",
      };

    case "message/search/set":
      return {
        ...state,
        messageSearchString: payload,
      };

    default:
      return state;
  }
}
