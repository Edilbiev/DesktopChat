const initialState = {
  loading: false,
  items: [],
  opened: null,
  nextTempId: 1
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
        nextTempId: state.nextTempId + 1,
        items: [
          ...state.items,
          {
            ...action.payload,
            sending: true
          }
        ]
      };

    case "message/send/succeed":
      const { nextTempId } = action.payload;

      return {
        ...state,
        items: state.items.map(item => {
          if(item.nextTempId === nextTempId) {
            return action.payload
          }

          return item;
        }),
      };

    default:
      return state;
  }
}
