import { queryList, removeItem, toggleItem } from './service';

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

    // *removeFetch({ payload }, { call, put }) {
    //   const response = yield call(removeItem, payload);
    //   yield put({
    //     type: 'removeItem',
    //     payload: response,
    //   });
    // },

    *toggleFetch({ payload }, { call, put }) {
      const response = yield call(toggleItem, payload);
      yield put({
        type: 'toggleItem',
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
    toggleItem(state, action) {
      let id = action.payload.data[0]._id
      let newDate = state.data
      newDate.data.map(n => {
        if (n._id == id) {
          n.visibility = n.visibility == 0 ? 1 : 0;
        }
        return n
      })
      return { ...state, data: newDate };
    },


    // appendList(state, action) {
    //   return { ...state, list: state.list.concat(action.payload) };
    // },
  },
};
export default Model;
