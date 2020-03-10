import React, { Component } from 'react'
import store from '../store'
// import * as actionTypes from '../store/actionTypes'
import * as actionCreators from '../store/actionCreators'

import TodoListUI from './TodoListUI'

export default class TodoList extends Component {
  state = store.getState()

  componentDidMount() {
    store.subscribe(() => {
      this.setState(store.getState())
    })
    const action = actionCreators.getTodoList();
    store.dispatch(action)
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true
  }

  changInputValue = e => {
    const action = actionCreators.changInputValueAction(e);
    store.dispatch(action)
  }
  addTodoList = e => {
    // if (!e.target.value) {

    //   return false
    // }
    const action = actionCreators.addTodoListAction(this.state.inputValue);
    store.dispatch(action)
  }
  delTodoItem(index) {
    const action = actionCreators.delTodoItemAction(index);
    store.dispatch(action)
  }

  render() {
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        changInputValue={this.changInputValue}
        addTodoList={this.addTodoList}
        todoList={this.state.todoList}
        delTodoItem={this.delTodoItem}
      ></TodoListUI>
    )
  }



}