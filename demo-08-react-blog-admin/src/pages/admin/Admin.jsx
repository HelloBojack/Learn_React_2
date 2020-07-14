import React, { useState } from 'react'
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';

import './Admin.css'

const { Header, Sider, Content } = Layout;

function Admin() {
  const [collapsed, setCollapsed] = useState(false);

  const setCollapsedFun = () => {
    setCollapsed(!collapsed)
  }
  return <>
    <Layout style={{ height: '100%' }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" >
          <img src="//img10.360buyimg.com/imgzone/jfs/t1/142010/24/2905/5859/5f0d7ae4E9b3644c7/511d68dece1b455f.png" alt="" />
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            nav 1
            </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            nav 2
            </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            nav 3
            </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ paddingLeft: 10 }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: setCollapsedFun,
          })}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          Content
          </Content>
      </Layout>
    </Layout>
  </>
}

export default Admin