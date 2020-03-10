import { SAVE_USERS } from "../actions/users";
import { SAVE_QUESTION, SAVE_QUESTION_ANSWER } from "../actions/questions";

const user = (state = {}, action) => {
  switch (action.type) {
    case SAVE_QUESTION_ANSWER:
      const newAnswersObj = { ...state.answers };
      newAnswersObj[action.paylod.qid] = action.paylod.answer;
      return {
        ...state,
        answers: newAnswersObj
      };
    default: 
      return state
  }
};

export default (state = {}, action) => {
  switch (action.type) {
    case SAVE_USERS:
      return {
        ...state,
        ...action.users
      };
    case SAVE_QUESTION:
      return {
        ...state,
        [action.question.author]: {
          ...state[action.question.author],
          questions: [...state[action.question.author].questions, action.question.id]
        }
      }
    case SAVE_QUESTION_ANSWER:
      return {
        ...state,
        [action.paylod.authedUser]: user(state[action.paylod.authedUser], action)
      };
    default:
      return state;
  }
};
