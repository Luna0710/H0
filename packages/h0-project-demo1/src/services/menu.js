import request from 'utils/request';
import { API_HOST } from 'utils/config';

const prefix = `${API_HOST}/iam`;

export async function getCusMenu(payload) {
  const { page = 0, size = 10 } = payload;
  return request(`${prefix}/v1//tenants/having-custom-menu?page=${page}&size=${size}`);
}
