import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Counter from "./counter";

function reducer(state = 0, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "CLEAR":
      return 0;
    default:
      return state;
  }
}

const store = createStore(reducer);

const App = () =>
  <Provider store={store}>
    <Counter />
  </Provider>;

export default App;
