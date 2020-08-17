const initialState = {
  loading: false,
  items: [],
  opened: null,
  sending: false,
};

export default function chat(state = initialState, action) {
  switch (action.type) {
    case "chat/load/started":
      return {
        ...state,
        items: [],
        loading: true,
        opened: action.payload,
      };

    case "chat/load/success":
      return {
        ...state,
        items: action.payload,
        loading: false,
      };

    case "message/send/started":
      return {
        ...state,
        sending: true,
      };

    case "message/send/succeed":
      return {
        ...state,
        items: [...state.items, action.payload],
        sending: false,
      };

    default:
      return state;
  }
}
