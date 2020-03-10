import { SET_AUTHED_USER, REMOVE_AUTHED_USER } from "../actions/authed";

export default (state = null, action) => {
  switch (action.type) {
    case SET_AUTHED_USER:
      return action.id;
    case REMOVE_AUTHED_USER:
      return null
    default:
      return state;
  }
};
