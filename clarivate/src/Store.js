import { combineReducers, createStore } from "redux";

// Reducer file
const counterReducer = (state = 0, { type, payload }) => {
  switch (type) {
    case "INCREMENT":
      return state + payload;
    case "DECREMENT":
      return state + payload;
    default:
      return state;
  }
};

// Action creator file
export const increment = (payload) => ({ type: "INCREMENT", payload });
export const decrement = (payload) => ({ type: "DECREMENT", payload });

// Store entrypoint file
const reducers = () =>
  combineReducers({
    counter: counterReducer,
  });

const Store = createStore(reducers());

export default Store;