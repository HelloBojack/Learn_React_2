import * as actionTypes from '../store/actionTypes'

import axios from 'axios'

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

export const getTodoList = () => {
  return (dispatch) => {
    axios.post('http://localhost:7300/mock/5e66155f7d358925b8091b8d/example/getList').then((res) => {
      const action = getListAction(res.data.data.list)
      dispatch(action)
    })
      .catch((err) => {
        console.log(err)
      })
  }
}
