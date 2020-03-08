import * as actionTypes from '../store/actionTypes'

const defaultState = {
  inputValue: '',
  todoList: []
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANG_INPUTVALUE:
      return Object.assign({}, state, {
        inputValue: action.value
      })
    case actionTypes.ADD_TODOLIST:
      return Object.assign({}, state, {
        inputValue: '',
        todoList: [...state.todoList, {
          text: action.value,
          completed: false
        }]
      })
    case actionTypes.DEL_TODOITEM:
      state.todoList.splice(action.index, 1)
      return Object.assign({}, state, {
        todoList: state.todoList
      })

    case actionTypes.GET_LIST:
      return Object.assign({}, state, {
        todoList: action.data
      })
    default:
      return state
  }

}
