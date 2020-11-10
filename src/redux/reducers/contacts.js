const initialState = {
  loading: true,
  items: [],
};

export default function Contacts(state = initialState, action) {
  switch (action.type) {
    case "contacts/load/started":
      return {
        ...state,
        loading: true,
      };

    case "contacts/load/success":
      return {
        ...state,
        items: action.payload,
        loading: false,
      };

    default:
      return state;
  }
}
