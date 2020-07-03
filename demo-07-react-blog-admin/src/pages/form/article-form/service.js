import request from 'umi-request';

export async function queryArticle(params) {
  return request(`/myserver/article/${params}`, {
    method: 'GET',

  });
}


export async function fakeSubmitForm(params) {
  return request('/api/forms', {
    method: 'POST',
    data: params,
  });
}
