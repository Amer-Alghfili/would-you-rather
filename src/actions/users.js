import { _getUsers } from "../api/_DATA";

export const SAVE_USERS = 'SAVE_USERS';

export const saveUsers = () => {
  return dispatch => {
    return _getUsers().then(users => {
      dispatch({
        type: SAVE_USERS,
        users
      });
    });
  };
};
