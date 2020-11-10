const initialState = {
  loading: false,
  items: [],
  nextTempId: 1,
  deleting: false,
};

export default function chat(state = initialState, action) {
  switch (action.type) {
    case "chat/load/started":
      return {
        ...state,
        items: [],
        loading: true,
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
        nextTempId: state.nextTempId + 1,
        items: [
          ...state.items,
          {
            ...action.payload,
            sending: true,
          },
        ],
      };

    case "message/send/succeed":
      const { nextTempId } = action.payload;

      return {
        ...state,
        items: state.items.map((item) => {
          if (item.nextTempId === nextTempId) {
            return action.payload;
          }

          return item;
        }),
      };

    case "message/delete/started":
      return {
        ...state,
        deleting: true,
      };

    case "message/delete/succeed":
      return {
        ...state,
        deleting: false,
        items: action.payload,
      };

    default:
      return state;
  }
}
