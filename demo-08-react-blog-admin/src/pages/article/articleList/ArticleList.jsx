import React, { useState, useEffect, useRef } from 'react';
import { Table, Tag, Space } from 'antd';

import { getArticleList, hiddenArticleItem } from '../../../api/api'


const ArticleList = () => {
  const [articleList, setArticleList] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const articleListRef = useRef();

  useEffect(() => {
    async function fetchData() {
      let result = await getArticleList()
      articleListRef.current = result.data
      // console.log(articleListRef.current)
      setArticleList(articleListRef.current)
    }
    fetchData();
    setRefresh(true)
  }, [refresh])

  const columns = [
    {
      title: '标题',
      dataIndex: 'title',
      key: 'title',
      align: 'center'
    },
    {
      title: '简介',
      dataIndex: 'intro',
      key: 'intro',
      align: 'center',
      width: '300px',
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
      onFilter: (value, record) => record.tags.indexOf(value) != -1,
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
      title: '操作',
      key: 'action',
      align: 'center',
      render: (text, record) => (
        <Space size="middle">
          <a>编辑</a>
          <a onClick={() => handleHiddenArticleItem(record)}>删除</a>
        </Space>
      ),
    },
  ];

  const handleHiddenArticleItem = (record) => {
    let result = hiddenArticleItem(record._id)
    console.log(result)
  }

  return <>
    <Table columns={columns} dataSource={articleList} rowKey={(record) => record._id} />
  </>
}

export default ArticleList;