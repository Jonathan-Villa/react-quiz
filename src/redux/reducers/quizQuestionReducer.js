import { action_types } from "../actions/actionType";

export const quizQuestionReducer = (state = {}, action) => {
  switch (action.type) {
    case action_types.SUBMIT_QUIZ_QUESTION:
      return {
        ...state,
        payload: action.payload,
      };

    default:
      return {};
  }
};
