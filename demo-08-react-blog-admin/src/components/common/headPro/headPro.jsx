import React, { useContext } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { Layout, Menu, Dropdown, message, Breadcrumb, Modal } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  DownOutlined,
  UserOutlined,
  SettingOutlined,
  LogoutOutlined,
  ExclamationCircleOutlined
} from '@ant-design/icons';

import storageUtils from '../../../utils/storageUtils'
import memoryUtils from '../../../utils/memoryUtils'

import { Collapsed } from '../../../store/context'

import menuList from '../../../config/menuConfig.jsx'
import breadcrumbList from '../../../config/breadcrumb'

import './headPro.css'

const { Header } = Layout;
const { confirm } = Modal;
function HeaderPro(props) {
  const { toggleCollapsed } = props
  const collapsed = useContext(Collapsed);
  const user = storageUtils.getUser()
  const { location, history } = props;
  const pathSnippets = location.pathname.split('/').filter(i => i);
  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
    return url === '/home' ?
      '' : breadcrumbList[url] ?
        (<Breadcrumb.Item key={url}>
          <Link to={url}>{breadcrumbList[url]}</Link>
        </Breadcrumb.Item>) : ''
  });
  const breadcrumbItems = [
    <Breadcrumb.Item key="home">
      <Link to={menuList[0].path}>{menuList[0].icon}</Link>
    </Breadcrumb.Item>,
  ].concat(extraBreadcrumbItems);

  function handleMenuClick(e) {
    message.info('Click on menu item.');
    // console.log('click', e);
  }
  const logoutClick = () => {
    confirm({
      title: '你确定要退出吗？',
      icon: <ExclamationCircleOutlined />,
      // content: 'Some descriptions',
      okText: '确定',
      cancelText: '取消',
      onOk() {
        storageUtils.removeCookie('user')
        memoryUtils.user = {}
        history.replace("/login");

      },
      onCancel() {
        // console.log('Cancel');
      },
    });
  }
  const menu = (
    <Menu>
      <Menu.Item key="1" icon={<UserOutlined />} onClick={handleMenuClick}>
        个人中心
      </Menu.Item>
      <Menu.Item key="2" icon={<SettingOutlined />} onClick={handleMenuClick}>
        个人设置
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3" icon={<LogoutOutlined />} onClick={logoutClick}>
        退出登录
      </Menu.Item>
    </Menu>
  );
  return <>
    <Header className="site-layout-sub-header-background" style={{ padding: '0 24px' }} >
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: 'trigger',
        onClick: toggleCollapsed,
      })}
      <span style={{ paddingLeft: 20, display: 'inline-block', cursor: 'pointer' }}>
        <Breadcrumb>{breadcrumbItems}</Breadcrumb>
      </span>
      <Dropdown overlay={menu} trigger={['click']} placement="bottomLeft" >
        <div>
          <span style={{ padding: '0 10px' }}>{user.username}</span>
          <DownOutlined />
        </div>
      </Dropdown>
    </Header >
  </>
}

export default withRouter(HeaderPro)