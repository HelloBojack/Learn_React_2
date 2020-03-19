import React, { useState, useReducer } from "react";

const reducer = function(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return { count: state.count };
  }
};

export default function Example02() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const { count } = state;
  return (
    <div>
      <div>{count}</div>
      <button
        onClick={() => {
          dispatch({ type: "increment" });
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement" });
        }}
      >
        -
      </button>
    </div>
  );
}
