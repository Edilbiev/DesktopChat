const initialState = {
  loading: false,
  items: [],
  opened: null,
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
      };

    case "message/send/succeed":
      const { tempId } = action.payload;
      const newItems = state.items.map(item => {
        if(tempId === item.tempId) {
          return action.payload
        }

        return item;
      })
      return {
        ...state,
        items: newItems,
      };

    default:
      return state;
  }
}
