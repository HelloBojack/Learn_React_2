import { createStore, compose, applyMiddleware } from 'redux'
import reducer from './reducer'
// 2.redux-thunk
import thunk from 'redux-thunk'

// 3.redux-saga
// import creatSagaMiddleware from 'redux-saga'
// import mySagas from './sages'
// const sagaMiddleware = creatSagaMiddlewar();

// 1.不使用中间件
// const enhancers = compose(
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
// const store = createStore(reducer, enhancers)
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

// 2.redux-thunk
const enhancer = composeEnhancers(
  applyMiddleware(thunk)
);

// 3.redux-saga
// const enhancer = composeEnhancers(
//   applyMiddleware(sagaMiddleware)
// );

const store = createStore(reducer, enhancer);
// 3.redux-saga
// sagaMiddleware.run(mySagas)

export default store