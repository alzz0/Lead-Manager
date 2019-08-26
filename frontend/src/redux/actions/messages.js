export const deleteMessage = msg => {
  return {
    type: "DELETE_MESSAGE",
    payload: msg
  };
};

export const createMessage = msg => {
  return {
    type: "CREATE_MESSAGE",
    payload: msg
  };
};
