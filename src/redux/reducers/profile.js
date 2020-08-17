const initialState = {
  loading: true,
  _id: null,
};

export default function profile(state = initialState, action) {
  switch (action.type) {
    case "profile/load/started":
      return {
        ...state,
        loading: true,
      };

    case "profile/load/succeed":
      return {
        ...state,
        _id: action.payload._id,
        loading: false,
      };

    default:
      return state;
  }
}
