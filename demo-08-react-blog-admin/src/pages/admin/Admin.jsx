import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Layout } from 'antd';


import storageUtils from '../../utils/storageUtils'
import memoryUtils from '../../utils/memoryUtils'

import LeftNav from '../../components/common/leftNav/leftNav'
import HeaderPro from '../../components/common/headPro/headPro'
import Role from '../role/Role'
import Home from '../home/Home'
import ArticleNew from '../article/articleNew/ArticleNew'
import ArticleList from '../article/articleList/ArticleList'

import { Collapsed } from '../../store/context'

import './Admin.css'
const { Footer, Content } = Layout;

function Admin(props) {
  const { history } = props;
  const user = storageUtils.getUser()
  useEffect(() => {
    if (user && user._id) {
      memoryUtils.user = user
    }
    else {
      history.replace("/login");
    }
  }, [history, user]);
  // Header组件合并侧边栏
  const [collapsed, setCollapsed] = useState(true);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed)
  }

  return <>
    <Layout style={{ height: '100%' }}>
      <Collapsed.Provider value={collapsed}>
        <LeftNav></LeftNav>
      </Collapsed.Provider>
      <Layout className="site-layout">
        <Collapsed.Provider value={collapsed}>
          <HeaderPro toggleCollapsed={toggleCollapsed}></HeaderPro>
        </Collapsed.Provider>
        <Content style={{ margin: '0 16px 0', padding: 24, }}>
          <Switch>
            <Route path='/' exact component={Home}></Route>
            <Route path='/home' component={Home}></Route>
            <Route path='/role' component={Role}></Route>
            <Route path='/article/articleNew' exact component={ArticleNew} key='articleNew'></Route>
            <Route path='/article/articleList/articleEdit/:id' exact component={ArticleNew} key='articleEdit'></Route>
            <Route path='/article/articleList' exact component={ArticleList}></Route>
            {/* <Redirect to='/home' /> */}
          </Switch>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  </>
}

export default Admin