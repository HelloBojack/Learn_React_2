import React, { Component } from "react";
import store from "../store";
import TodoListUI from "./TodoListUI";
import { connect } from "react-redux";

import { Provider } from "react-redux";

class TodoList extends Component {
  render() {
    let {
      todoList,
      inputValue,
      inputValueChange,
      addTodoList,
      delTodoItem
    } = this.props;

    return (
      <Provider store={store}>
        <TodoListUI
          todoList={todoList}
          inputValue={inputValue}
          inputValueChange={inputValueChange}
          addTodoList={addTodoList}
          delTodoItem={delTodoItem}
        ></TodoListUI>
      </Provider>
    );
  }
}
const steteToProps = state => {
  return {
    inputValue: state.inputValue,
    todoList: state.todoList
  };
};

const dispatchToProps = dispatch => {
  return {
    inputValueChange(e) {
      let action = {
        type: "inputValueChangeAction",
        value: e.target.value
      };
      dispatch(action);
    },
    addTodoList() {
      let action = {
        type: "addTodoListAction"
      };
      dispatch(action);
    },
    delTodoItem(index) {
      let action = {
        type: "delTodoItemAction",
        index
      };
      dispatch(action);
    }
  };
};

export default connect(steteToProps, dispatchToProps)(TodoList);
