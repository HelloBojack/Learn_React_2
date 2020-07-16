import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MailOutlined
} from '@ant-design/icons';

import './Admin.css'

import storageUtils from '../../utils/storageUtils'
import memoryUtils from '../../utils/memoryUtils'


import Role from '../role/Role'
import User from '../user/User'
import Home from '../home/Home'

const { SubMenu } = Menu;
const { Header, Sider, Footer, Content } = Layout;

function Admin(props) {
  const { history } = props;
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const user = storageUtils.getUser()
    if (user && user._id) {
      memoryUtils.user = user
    }
    else {
      history.replace("/login");
    }
  }, [history]);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed)
  }

  return <>
    <Layout style={{ height: '100%' }}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
      // breakpoint="lg"
      // collapsedWidth="0"
      // onBreakpoint={broken => {
      //   console.log(broken);
      // }}
      // onCollapse={(collapsed, type) => {
      //   console.log(collapsed, type);
      // }}
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
        >
          <Menu.Item key="1" icon={<UserOutlined />}>
            <Link to='/home'>
              主页
            </Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            nav 2
        </Menu.Item>
          <Menu.Item key="/role" icon={<UserOutlined />}>
            <Link to='/role'>
              角色管理
            </Link>
          </Menu.Item>
          <Menu.Item key="/user" icon={<UserOutlined />}>
            <Link to='/user'>
              用户管理
            </Link>
          </Menu.Item>
          {/* <SubMenu
            key="sub1"
            title={
              <span>
                <MailOutlined />
                <span>Navigation One</span>
              </span>
            }
          >
            <Menu.ItemGroup key="g1" title="Item 1">
              <Menu.Item key="5">Option 1</Menu.Item>
              <Menu.Item key="6">Option 2</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup key="g2" title="Item 2">
              <Menu.Item key="7">Option 3</Menu.Item>
              <Menu.Item key="8">Option 4</Menu.Item>
            </Menu.ItemGroup>
            <SubMenu key="sub2" title="Submenu">
              <Menu.Item key="9">Option 7</Menu.Item>
              <Menu.Item key="10">Option 8</Menu.Item>
            </SubMenu>
          </SubMenu> */}
        </Menu>
      </Sider>
      <Layout>
        <Header className="site-layout-sub-header-background" style={{ padding: 0 }} >
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: toggleCollapsed,
          })}
        </Header>
        <Content style={{ margin: '24px 16px 0' }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <Switch>
              <Route path='/home' component={Home}></Route>
              <Route path='/role' component={Role}></Route>
              <Route path='/user' component={User}></Route>
            </Switch>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  </>
}

export default Admin