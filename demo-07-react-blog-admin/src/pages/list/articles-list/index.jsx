// import { DownOutlined, PlusOutlined } from '@ant-design/icons';
import { Table, Tooltip, Tag, Button, Divider, Dropdown, Menu, message } from 'antd';
import React, { useState, useRef, useEffect } from 'react';
import { connect, Link, router, FormattedMessage } from 'umi';
import { routerRedux } from 'dva';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
// import ProTable from '@ant-design/pro-table';
// import CreateForm from './components/CreateForm';
// import UpdateForm from './components/UpdateForm';
import styles from './style.less';
const ArticlesList = ({ dispatch, articlesList: { data }, loading }) => {
  const [pageNo, setpageNo] = useState(1);
  const pageNoRecent = useRef('');
  const defaultPageSize = 10

  useEffect(() => {
    dispatch({
      type: 'articlesList/fetch',
      payload: { pageSize: defaultPageSize, pageNo }
    });
  }, []);

  const handlePageChange = (pagination) => {
    pageNoRecent.current = pagination.current
    setpageNo(pagination.current)
    dispatch({
      type: 'articlesList/fetch',
      payload: { pageSize: defaultPageSize, pageNo: pageNoRecent.current }
    });
  }
  const toggleItem = (id, visibility) => {
    if (visibility == 1) {
      message.success('文章已显示');
    }
    else {
      message.error('文章已隐藏');
    }

    dispatch({
      type: 'articlesList/toggleFetch',
      payload: {
        id,
        visibility
      },
    });
  };

  const paginationProps = {
    pageSize: defaultPageSize,
    current: pageNo,
    total: data.totalNum,
  };

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
          {tags.split(',').map((tag, index) => {
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
          {visibility == 1 ? (<div>显示</div>) : (<div>隐藏</div>)}
        </>
      ),
    },
    {
      title: '操作',
      key: 'operation',
      fixed: 'right',
      align: 'center',
      width: 200,
      render: (val, item, index) => (
        <div className={styles.actionDiv} >
          <Link to={{
            pathname: '/list/articles-list/article-form/?' + item._id,
          }}>
            <Button type="dashed" size='small'>
              编辑
          </Button>
          </Link>
          {item.visibility == 0 ? (<Button type="primary" size='small' onClick={() => toggleItem(item._id, 1)} > 显示</Button>) : (<Button type="primary" size='small' danger onClick={() => toggleItem(item._id, 0)}>隐藏</Button>)}
        </div >
      ),
    },
  ];




  return (
    <PageHeaderWrapper
    // content={<FormattedMessage id="formandbasic-form.basic.description" />}
    >
      <Table
        columns={columns}
        dataSource={data.data}
        scroll={{ x: 500 }}
        rowKey={(columns, index) => index}
        loading={loading}
        pagination={paginationProps}
        onChange={handlePageChange}
      >
      </Table>
    </PageHeaderWrapper >
  )
};

export default connect(({ articlesList, loading }) => ({
  articlesList,
  loading: loading.models.articlesList,
}))(ArticlesList);

