export const SET_AUTHED_USER = "SET_AUTHED_USER";
export const REMOVE_AUTHED_USER = "REMOVE_AUTHED_USER";

export const setAuthedUser = id => {
  return dispatch => {
    localStorage.setItem("authedUser", id);
    dispatch({
      type: SET_AUTHED_USER,
      id
    });
  };
};

export const removeAuthedUser = () => {
  return dispatch => {
    localStorage.removeItem("authedUser");
    dispatch({
      type: REMOVE_AUTHED_USER
    });
  };
};

export const authCheck = () => {
  return dispatch => {
    const id = localStorage.getItem("authedUser");
    if (!id) {
      return;
    }
    dispatch(setAuthedUser(id));
  };
};
