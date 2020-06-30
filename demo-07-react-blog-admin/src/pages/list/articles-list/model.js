import { queryList, removeItem } from './service';

const Model = {
  namespace: 'articlesList',
  state: {
    data: [],
  },
  effects: {
    *fetch({ payload }, { call, put }) {
      const response = yield call(queryList, payload);
      yield put({
        type: 'queryList',
        payload: response.result ? response : [],
      });
    },

    *removeFetch({ payload }, { call, put }) {
      const response = yield call(removeItem, payload);
      yield put({
        type: 'removeItem',
        payload: response,
      });
    },

    // *appendFetch({ payload }, { call, put }) {
    //   const response = yield call(queryFakeList, payload);
    //   yield put({
    //     type: 'appendList',
    //     payload: Array.isArray(response.data) ? response.data : [],
    //   });
    // },
  },
  reducers: {
    queryList(state, action) {
      return { ...state, data: action.payload };
    },
    removeItem(state, action) {
      console.log(state)
      console.log(action.payload)
      if (action.payload.result) {

      }
      // return { ...state, data: action.payload };
    },
    // appendList(state, action) {
    //   return { ...state, list: state.list.concat(action.payload) };
    // },
  },
};
export default Model;
