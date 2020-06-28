import { queryFakeList } from './service';

const Model = {
  namespace: 'articlesList',
  state: {
    list: [],
  },
  effects: {
    *fetch({ payload }, { call, put }) {
      const response = yield call(queryFakeList, payload);
      // console.log(response.data)
      yield put({
        type: 'queryList',
        payload: Array.isArray(response.data) ? response.data : [],
      });
    },

    *appendFetch({ payload }, { call, put }) {
      const response = yield call(queryFakeList, payload);
      yield put({
        type: 'appendList',
        payload: Array.isArray(response.data) ? response.data : [],
      });
    },
  },
  reducers: {
    queryList(state, action) {
      // console.log(state)
      // console.log(action)
      return { ...state, list: action.payload };
    },

    appendList(state, action) {
      return { ...state, list: state.list.concat(action.payload) };
    },
  },
};
export default Model;
