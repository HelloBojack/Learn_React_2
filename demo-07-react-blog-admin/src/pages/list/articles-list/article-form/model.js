import { message } from 'antd';
import { queryArticle, fakeSubmitForm } from './service';

const Model = {
  namespace: 'articleForm',
  state: {
    data: {},
  },
  effects: {
    *fetch({ payload }, { call, put }) {
      const response = yield call(queryArticle, payload);
      yield put({
        type: 'queryArticle',
        payload: response,
      });
      // console.log(response)
    },

    // *submitRegularForm({ payload }, { call }) {
    //   yield call(fakeSubmitForm, payload);
    //   message.success('提交成功');
    // },
  },
  reducers: {
    queryArticle(state, action) {
      state.data = action.payload
      // console.log(action.payload)
      // console.log(state.data)
      // console.log(state)
      return { ...state, data: action.payload };
    },
  },
};
export default Model;
