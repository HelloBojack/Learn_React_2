import request from 'umi-request';

export async function queryFakeList(params) {
  return request('/myserver/articlePage', {
    method: "POST",
    params,
  });
}
