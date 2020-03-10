const defaultState = {
  inputValue: "Bojack",
  todoList: [
    {
      text: "Learn React",
      competed: false
    }
  ]
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case "inputValueChangeAction":
      return Object.assign({}, state, {
        inputValue: action.value
      });
    case "addTodoListAction":
      return Object.assign({}, state, {
        todoList: [
          ...state.todoList,
          { text: state.inputValue, competed: false }
        ],
        inputValue: ""
      });
    case "delTodoItemAction":
      // const newState = Object.assign({}, state);
      const newState = JSON.parse(JSON.stringify(state));
      newState.todoList.splice(action.value, 1);
      return newState;
    default:
  }

  return state;
};
