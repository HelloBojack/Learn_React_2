import React, { useState, useEffect } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { Layout } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from '@ant-design/icons';

import storageUtils from '../../utils/storageUtils'
import memoryUtils from '../../utils/memoryUtils'

import LeftNav from '../../components/common/leftNav'
import Role from '../role/Role'
import User from '../user/User'
import Home from '../home/Home'

import { Collapsed } from '../../store/context'

import './Admin.css'
const { Header, Footer, Content } = Layout;

function Admin(props) {
  const { history } = props;
  useEffect(() => {
    const user = storageUtils.getUser()
    if (user && user._id) {
      memoryUtils.user = user
    }
    else {
      history.replace("/login");
    }
  }, [history]);
  // Header组件合并侧边栏
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed)
  }

  return <>
    <Layout style={{ height: '100%' }}>
      <Collapsed.Provider value={collapsed}>
        <LeftNav></LeftNav>
      </Collapsed.Provider>
      <Layout className="site-layout">
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
              {/* <Redirect to='/home' /> */}
            </Switch>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  </>
}

export default Admin