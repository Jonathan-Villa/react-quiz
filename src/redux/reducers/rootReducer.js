import { combineReducers } from "redux";
import { quizQuestionReducer } from "./quizQuestionReducer";


const rootReducer = combineReducers({
  quizQuestionReducer,
});

export default rootReducer;
