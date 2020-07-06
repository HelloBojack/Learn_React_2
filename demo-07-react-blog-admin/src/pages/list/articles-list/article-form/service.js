import request from 'umi-request';

export async function queryArticle(params) {
  return request(`/myserver/article/${params}`, {
    method: 'GET',
  });
}
