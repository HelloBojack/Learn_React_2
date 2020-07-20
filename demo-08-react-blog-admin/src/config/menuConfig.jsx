import React from 'react'
import {
  HomeOutlined,
  UserOutlined
} from '@ant-design/icons';


const menuList = [
  {
    title: '首页', // 菜单标题名称 
    path: '/home', // 对应的 path 
    icon: <HomeOutlined />, // 图标组件
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