import React, { useState, useEffect, useRef } from 'react';
import { Table, Tag, Space } from 'antd';

import { getArticleList } from '../../../api/api'


const ArticleList = () => {
  const [articleList, setArticleList] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const articleListRef = useRef();

  const columns = [
    {
      title: '标题',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: '简介',
      dataIndex: 'intro',
      key: 'intro',
    },
    {
      title: '浏览量',
      dataIndex: 'browseNum',
      key: 'browseNum',
    },
    {
      title: '点赞数',
      dataIndex: 'likeNum',
      key: 'likeNum',
    },
    {
      title: '评论数',
      dataIndex: 'commentNum',
      key: 'commentNum',
    },
    {
      title: '浏览量',
      dataIndex: 'browseNum',
      key: 'browseNum',
    },

    // {
    //   title: 'Tags',
    //   key: 'tags',
    //   dataIndex: 'tags',
    //   render: tags => (
    //     <>
    //       {tags.map(tag => {
    //         let color = tag.length > 5 ? 'geekblue' : 'green';
    //         if (tag === 'loser') {
    //           color = 'volcano';
    //         }
    //         return (
    //           <Tag color={color} key={tag}>
    //             {tag.toUpperCase()}
    //           </Tag>
    //         );
    //       })}
    //     </>
    //   ),
    // },
    // {
    //   title: 'Action',
    //   key: 'action',
    //   render: (text, record) => (
    //     <Space size="middle">
    //       <a>Invite {record.name}</a>
    //       <a>Delete</a>
    //     </Space>
    //   ),
    // },
  ];


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


  return <>

    <Table columns={columns} dataSource={articleList} rowKey={(record) => record._id} />
  </>
}

export default ArticleList;