import * as actionTypes from '../store/actionTypes'

export const changInputValueAction = e => (
  {
    type: actionTypes.CHANG_INPUTVALUE,
    value: e.target.value
  })

export const addTodoListAction = (inputValue) => (
  {
    type: actionTypes.ADD_TODOLIST,
    value: inputValue
  })

export const delTodoItemAction = (index) => (
  {
    type: actionTypes.DEL_TODOITEM,
    index
  })

export const getListAction = (data) => (
  {
    type: actionTypes.GET_LIST,
    data
  })
