import { saveUsers } from "./users";
import { saveQuestions } from "./questions";
import { authCheck } from "./authed";

export default () => {
  return dispatch => {
    dispatch(authCheck());
    dispatch(saveQuestions());
    dispatch(saveUsers());
  };
};
