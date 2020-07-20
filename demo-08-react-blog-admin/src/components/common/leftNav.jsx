import React, { useContext } from 'react'
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom'

import menuList from '../../config/menuConfig.jsx'
import { Collapsed } from '../../store/context'
// const { SubMenu } = Menu;
const { Sider } = Layout;



function LeftNav() {
  const collapsed = useContext(Collapsed);
  return <>
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
        {
          menuList.map((item, index) => {
            return <Menu.Item key={index + 1} icon={item.icon} >
              <Link to={item.path}>
                {item.title}
              </Link>
            </Menu.Item>
          })
        }


        {/* <Menu.Item key="1" icon={<HomeOutlined />}>
          <Link to='/home'>
            主页
            </Link>
        </Menu.Item> */}
        {/* <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            nav 2
        </Menu.Item> */}
        {/* <Menu.Item key="/role" icon={<UserOutlined />}>
          <Link to='/role'>
            角色管理
            </Link>
        </Menu.Item>
        <Menu.Item key="/user" icon={<UserOutlined />}>
          <Link to='/user'>
            用户管理
            </Link>
        </Menu.Item> */}
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
  </>
}

export default LeftNav