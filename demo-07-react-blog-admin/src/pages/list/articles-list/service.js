import request from 'umi-request';

export async function queryList(params) {
  return request('/myserver/articleAllPage', {
    method: "POST",
    data: { ...params },
  });
}
export async function removeItem(params) {
  return request(`/myserver/article/${params}`, {
    method: 'DELETE',
  });
}

export async function toggleItem(params) {
  return request(`/myserver/article/${params.id}`, {
    method: 'PUT',
    data: {
      visibility: params.visibility
    }
  });
}

export async function addRule(params) {
  return request('/api/rule', {
    method: 'POST',
    data: { ...params, method: 'post' },
  });
}
export async function updateRule(params) {
  return request('/api/rule', {
    method: 'POST',
    data: { ...params, method: 'update' },
  });
}
