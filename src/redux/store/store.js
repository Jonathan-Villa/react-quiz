import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers/rootReducer";

// holds our initial state
const initalState = {};

// statemanagement just got better! Here is our store that holds our state after a dispach
// typically the rootReducer should be the all the reducers combined
const store = createStore(
  rootReducer,
  initalState,
  compose(applyMiddleware(thunk))
);

export default store;
