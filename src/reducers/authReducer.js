let initialState = {
  users: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "AUTH_USER":
      return { ...state, users: action.payload };
    default:
      return state;
  }
};

export default authReducer;
