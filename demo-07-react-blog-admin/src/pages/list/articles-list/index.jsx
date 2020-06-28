import { DownOutlined, PlusOutlined } from '@ant-design/icons';
import { Table, Tooltip, Tag, Button, Divider, Dropdown, Menu, message } from 'antd';
import React, { useState, useRef, useEffect } from 'react';
import { connect } from 'umi';
// import { PageHeaderWrapper } from '@ant-design/pro-layout';
// import ProTable from '@ant-design/pro-table';
// import CreateForm from './components/CreateForm';
// import UpdateForm from './components/UpdateForm';
import { queryRule, updateRule, addRule, removeRule } from './service';
import styles from './style.less';
const ArticlesList = ({ dispatch, articlesList: { list }, loading }) => {
  // const [form] = Form.useForm();
  // console.log(list)
  useEffect(() => {
    dispatch({
      type: 'articlesList/fetch',
      payload: {
        "pageNo": 1,
        "pageSize": 10
      },
    });
  }, []);
  const columns = [
    {
      title: '文章标题',
      width: 100,
      dataIndex: 'title',
      key: 'title',
      align: 'center'
    },
    {
      title: '内容简介',
      width: 100,
      dataIndex: 'intro',
      key: 'intro',
      align: 'center',
      ellipsis: {
        showTitle: false,
      },
      render: intro => (
        <Tooltip placement="topLeft" title={intro}>
          {intro}
        </Tooltip>
      ),
    },
    {
      title: '浏览量',
      width: 100,
      dataIndex: 'browseNum',
      key: 'browseNum',
      align: 'center',
      sorter: (a, b) => a.browseNum - b.browseNum,
    },
    {
      title: '点赞量',
      width: 100,
      dataIndex: 'likeNum',
      key: 'likeNum',
      align: 'center',
      sorter: (a, b) => a.likeNum - b.likeNum,
    },
    {
      title: '评论量',
      width: 100,
      dataIndex: 'commentNum',
      key: 'commentNum',
      align: 'center',
      sorter: (a, b) => a.commentNum - b.commentNum,
    },
    {
      title: '标签',
      width: 200,
      dataIndex: 'tags',
      key: 'tags',
      align: 'center',
      render: tags => (
        <>
          {tags.map((tag, index) => {
            let color = ['geekblue', 'green', 'volcano'];
            return (
              <Tag color={color[index]} key={index}>
                {tag}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: '状态',
      width: 100,
      dataIndex: 'visibility',
      key: 'visibility',
      align: 'center',
      render: visibility => (
        <>
          {visibility}
        </>
      ),
    },
    {
      title: '操作',
      key: 'operation',
      fixed: 'right',
      align: 'center',
      width: 200,
      render: () => (
        <div className={styles.actionDiv} >
          <Button type="primary" size='small'>
            编辑
          </Button>
          <Button type="primary" size='small' danger>
            显示/隐藏
          </Button>
        </div>
      ),
    },
  ];


  return (
    <Table columns={columns} dataSource={list} scroll={{ x: 500 }} rowKey={(columns, index) => index}>

    </Table>
  )
};

export default connect(({ articlesList, loading }) => ({
  articlesList,
  loading: loading.models.articlesList,
}))(ArticlesList);

