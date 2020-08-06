import React from 'react'
import {
  HomeOutlined,
  UserOutlined,
  BookOutlined,
  FileAddOutlined,
  UnorderedListOutlined,
} from '@ant-design/icons';

const menuList = [
  {
    title: '首页', // 菜单标题名称 
    path: '/home', // 对应的 path 
    icon: <HomeOutlined />, // 图标组件
  },
  {
    title: '文章管理',
    path: '/article',
    icon: <BookOutlined />,
    children: [
      {
        title: '新建文章',
        path: '/article/articleNew',
        icon: <FileAddOutlined />,
      },
      {
        title: '文章列表',
        path: '/article/articleList',
        icon: <UnorderedListOutlined />,
      }
    ]
  },
  {
    title: '图表管理',
    path: '/charts',
    icon: <BookOutlined />,
    children: [
      {
        title: '折线图',
        path: '/charts/list',
        icon: <BookOutlined />,
      },
      {
        title: '柱状图',
        path: '/charts/list2',
        icon: <BookOutlined />,
      }
    ]
  },
  {
    title: '角色管理',
    path: '/role',
    icon: <UserOutlined />,
  },
  {
    title: '用户管理',
    path: '/user',
    icon: <UserOutlined />,
  }
]
export default menuList