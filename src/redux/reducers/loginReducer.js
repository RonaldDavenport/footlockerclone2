import { GRAB_USERNAME } from "../action-types/getShoeData";

const initialState = {
  username: [],
};

export const getUsername = (state = initialState, action) => {
  switch (action.type) {
    case GRAB_USERNAME:
      return { state, username: action.payload };

    default:
      return state;
  }
};
