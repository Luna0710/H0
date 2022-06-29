import { getResponse } from 'utils/utils';
import { getCusMenu } from '../services/menu';

export default {
  namespace: 'menu',
  state: {
    list: null,
    size: 10,
    totalElements: 0,
  },
  effects: {
    *getCusMenuHttp({ payload }, { call, put }) {
      const data = yield call(getCusMenu, payload);
      let responseData = getResponse(data);
      yield put({ type: 'getCusMenu', data: responseData });
      return responseData;
    },
  },
  reducers: {
    getCusMenu(state, { data }) {
      return { ...state, list: data.content, size: data.size, totalElements: data.totalElements };
    },
  },
};
