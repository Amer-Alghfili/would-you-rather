import {
  _getQuestions,
  _saveQuestionAnswer,
  _saveQuestion
} from "../api/_DATA";

export const SAVE_QUESTIONS = "SAVE_QUESTIONS";

export const SAVE_QUESTION = "SAVE_QUESTION";

export const SAVE_QUESTION_ANSWER = "SAVE_QUESTION_ANSWER";

export const saveQuestions = () => {
  return dispatch => {
    return _getQuestions().then(questions => {
      dispatch({
        type: SAVE_QUESTIONS,
        questions
      });
    });
  };
};

export const saveQuestion = (question, history) => {
  return dispatch => {
    _saveQuestion(question).then(formattedQuestion => {
      dispatch({
        type: SAVE_QUESTION,
        question: formattedQuestion
      });
      history('/home');
    });
  };
};

export const saveQuestionAnswer = ({ authedUser, qid, answer }) => {
  return dispatch => {
    _saveQuestionAnswer({ authedUser, qid, answer }).then(() => {
      dispatch({
        type: SAVE_QUESTION_ANSWER,
        paylod: {
          authedUser,
          qid,
          answer
        }
      });
    });
  };
};
