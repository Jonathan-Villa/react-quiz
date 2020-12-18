import {action_types} from "./actionType"

export const submitQuizAction = (questionsPayload)=> {
    return {
        type: action_types.SUBMIT_QUIZ_QUESTION,
        payload: questionsPayload
    }
}