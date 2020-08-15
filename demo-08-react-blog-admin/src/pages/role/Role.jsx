import React, { useState, useEffect, useRef } from 'react';
import { Table, Tag, Space, Modal, Button, message } from 'antd';

import { getArticleList, updateArticleItem } from '@/api/api'
// import { Modal, Button, Space } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

const { confirm } = Modal;

const Role = (props) => {
  const { history } = props
  const [articleList, setArticleList] = useState([]);
  const [articlePagination, setArticlePagination] = useState({
    total: 0,
    pageSize: 10,
    pageNo: 1,
  });
  const [refresh, setRefresh] = useState(false);
  const articleListRef = useRef();

  useEffect(() => {
    async function fetchData() {
      // let result = await getArticleList()
      // articleListRef.current = result
      // console.log(articleListRef.current)
      // setArticleList(articleListRef.current.data)
      // console.log(articleList)
      // setArticlePagination({ total: articleListRef.current.totalNum })
    }
    fetchData();
    setRefresh(true)
  }, [refresh])

  const paginationProps = {
    showSizeChanger: true,
    showQuickJumper: true,
    showTotal: () => `共 ${articlePagination.total} 条`,
    pageSize: articlePagination.pageSize,
    current: articlePagination.pageSize,
    total: articlePagination.total,
    // onShowSizeChange: (current, pageSize) => this.changePageSize(pageSize, current),
    // onChange: (current) => this.changePage(current),
  };

  const editArticleItem = (id) => {
    history.push("/article/articleList/articleEdit/" + id);
  }

  const columns = [
    {
      title: '账号',
      dataIndex: 'title',
      key: 'title',
      align: 'center'
    },
    {
      title: '简介',
      dataIndex: 'intro',
      key: 'intro',
      align: 'center',
      width: '220px',
      ellipsis: true
    },
    {
      title: '标签',
      key: 'tags',
      dataIndex: 'tags',
      align: 'center',
      width: '150px',
      ellipsis: true,
      render: tags => (
        <>
          {tags.split(',').map((tag, index) => {
            let colors = ['geekblue', 'green'];
            return (
              <Tag color={colors[index]} key={tag}>
                {tag}
              </Tag>
            );
          })}
        </>
      ),
      filters: [
        {
          text: 'tag1',
          value: 'tag1',
        },
        {
          text: 'tag2',
          value: 'tag2',
        }
      ],
      onFilter: (value, record) => record.tags.indexOf(value) !== -1,
    },
    {
      title: '浏览量',
      dataIndex: 'browseNum',
      key: 'browseNum',
      align: 'center',
      sorter: (a, b) => a.browseNum - b.browseNum,
    },
    {
      title: '点赞数',
      dataIndex: 'likeNum',
      key: 'likeNum',
      align: 'center',
      sorter: (a, b) => a.likeNum - b.likeNum,
    },
    {
      title: '评论数',
      dataIndex: 'commentNum',
      key: 'commentNum',
      align: 'center',
      sorter: (a, b) => a.commentNum - b.commentNum,
    },
    {
      title: '显示/隐藏',
      dataIndex: 'visibility',
      key: 'visibility',
      align: 'center',
      render: (text, record) => (
        <Space size="middle">
          {record.visibility === 1 ? '显示' : '隐藏'}
        </Space>
      ),
    },
    {
      title: '操作',
      key: 'action',
      align: 'center',
      width: '160px',
      render: (text, record) => (
        <Space size="middle">
          <Button size="small" type="primary" onClick={() => editArticleItem(record._id)}>编辑</Button>
          {record.visibility === 1 ? <Button size="small" type="danger" onClick={() => handleHiddenArticleItem(record)}> 隐藏</Button> : <Button size="small" type="primary" onClick={() => handleHiddenArticleItem(record)}>显示</Button>}
        </Space>
      ),
    },
  ];

  const handleHiddenArticleItem = (record) => {
    confirm({
      title: '你确定要隐藏这个文章吗？',
      icon: <ExclamationCircleOutlined />,
      // content: 'Some descriptions',
      okText: '确定',
      okType: 'danger',
      cancelText: '取消',
      onOk() {
        let result;
        async function hiddenItem() {
          result = await updateArticleItem({ '_id': record._id, 'visibility': Number(!record.visibility) })
          setArticleList(articleList.map(n => n._id === result.data[0]._id ? n = result.data[0] : n))
          record.visibility === 1 ? message.success('隐藏文章成功') : message.success('显示文章成功');
        }
        hiddenItem();
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }

  return <>
    <Table
      pagination={paginationProps}
      columns={columns}
      dataSource={articleList}
      rowKey={(record) => record._id} />
  </>
}

export default Role;