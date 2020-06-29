import { queryFakeList } from './service';

const Model = {
  namespace: 'articlesList',
  state: {
    data: [],
  },
  effects: {
    *fetch({ payload }, { call, put }) {
      const response = yield call(queryFakeList, payload);
      yield put({
        type: 'queryList',
        payload: typeof response == "object" ? response : [],
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

    // appendList(state, action) {
    //   return { ...state, list: state.list.concat(action.payload) };
    // },
  },
};
export default Model;
