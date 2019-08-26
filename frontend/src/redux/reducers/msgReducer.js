const initState = {};

export default function(state = initState, action) {
  switch (action.type) {
    case "GET_MESSAGES":
      return action.payload;

    case "DELETE_MESSAGE":
      return (state = action.payload);
    case "CREATE_MESSAGE":
      return (state = action.payload);

    default:
      return state;
  }
}
