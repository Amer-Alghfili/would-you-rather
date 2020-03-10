import {
  SAVE_QUESTIONS,
  SAVE_QUESTION,
  SAVE_QUESTION_ANSWER
} from "../actions/questions";

const question = (state = {}, action) => {
  switch (action.type) {
    case SAVE_QUESTION_ANSWER:
      const optionObj = { ...state[action.paylod.answer] };
      const newVotes = [...optionObj.votes];
      newVotes.push(action.paylod.authedUser);
      optionObj.votes = newVotes;
      return {
        ...state,
        [action.paylod.answer]: optionObj
      };
    default: 
      return state
  }
};

export default (state = {}, action) => {
  switch (action.type) {
    case SAVE_QUESTIONS:
      return {
        ...state,
        ...action.questions
      };
    case SAVE_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question
      };
    case SAVE_QUESTION_ANSWER:
      return {
        ...state,
        [action.paylod.qid]: question(state[action.paylod.qid], action)
      };

    default:
      return state;
  }
};
