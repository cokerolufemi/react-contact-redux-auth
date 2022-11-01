let initialState = {
  contacts: [
    {
      name: "Coker",
      email: "goocng@gmail.com",
      gen: "22",
      id: Math.floor(Math.random() * 2000),
    },
    {
      name: "kelvin",
      email: "kelng@gmail.com",
      gen: "23",
      id: Math.floor(Math.random() * 2000),
    },
    {
      name: "Ben",
      email: "bencng@gmail.com",
      gen: "24",
      id: Math.floor(Math.random() * 2000),
    },
  ],
};
let contactReducer = (state = initialState, action) => {
  // console.log(action.payload);
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        contacts: action.payload,
      };

    case "DELETE_USER":
      return {
        ...state,
        contacts: state.contacts.filter((item) => item.id !== action.payload),
      };

    case "EDIT_USER":
      return {
        ...state,
        contacts: state.contacts.map((item) => {
          if (item.id === action.payload.id) {
            return action.payload.data;
          } else {
            return item;
          }
        }),
      };

    default:
      return state;
  }
};
export default contactReducer;
