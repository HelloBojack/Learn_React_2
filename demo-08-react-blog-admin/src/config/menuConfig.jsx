import React from 'react'
import {
  HomeOutlined,
  UserOutlined,
  BookOutlined,
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
        title: '文章管理',
        path: '/article/list',
        icon: <BookOutlined />,
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