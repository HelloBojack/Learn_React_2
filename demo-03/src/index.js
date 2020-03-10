import React from "react";
import ReactDOM from "react-dom";
import store from "./store";
import { Provider } from "react-redux";

import TodoList from "./components/TodoList";

ReactDOM.render(
  <Provider store={store}>
    <TodoList />
  </Provider>,
  document.getElementById("root")
);
