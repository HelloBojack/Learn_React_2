import React, { useContext } from 'react'
import { Layout, Menu, Dropdown, message } from 'antd';
import { Collapsed } from '../../../store/context'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  DownOutlined,
  UserOutlined,
  SettingOutlined,
  LogoutOutlined
} from '@ant-design/icons';
import storageUtils from '../../../utils/storageUtils'
import './headPro.css'
const { Header } = Layout;

function HeaderPro(props) {
  const { toggleCollapsed } = props
  const collapsed = useContext(Collapsed);
  const user = storageUtils.getUser()

  function handleMenuClick(e) {
    message.info('Click on menu item.');
    console.log('click', e);
  }
  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1" icon={<UserOutlined />}>
        个人中心
      </Menu.Item>
      <Menu.Item key="2" icon={<SettingOutlined />}>
        个人设置
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3" icon={<LogoutOutlined />}>
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

      <Dropdown overlay={menu} trigger={['click']} placement="bottomLeft" >
        <div>
          <span style={{ padding: '0 10px' }}>{user.username}</span>
          <DownOutlined />
        </div>
      </Dropdown>

    </Header>
  </>
}

export default HeaderPro