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
        payload: response.result ? response : [],
      });
    },



    *submitRegularForm({ payload }, { call }) {
      yield call(fakeSubmitForm, payload);
      message.success('提交成功');
    },
  },
  reducers: {
    queryArticle(state, action) {
      return { ...state, data: action.payload };
    },
  },
};
export default Model;
